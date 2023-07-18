// 3rd Party
import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { I18nextProvider } from 'react-i18next';
import { SessionProvider } from 'next-auth/react';
import i18next from 'i18next';
import translations_es from '@/locales/es/global.json';
import translations_en from '@/locales/en/global.json';
// UI
import '@/styles/globals.css';

const queryClient = new QueryClient();

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'es',
    resources: {
        es: {
            global: translations_es,
        },
        en: {
            global: translations_en,
        },
    },
});
export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <SessionProvider session={session}>
                <I18nextProvider i18n={i18next}>
                    <Component {...pageProps} />
                    <ReactQueryDevtools />
                </I18nextProvider>
            </SessionProvider>
        </QueryClientProvider>
    );
}
