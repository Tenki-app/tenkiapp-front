// 3rd Party
import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { I18nextProvider } from 'react-i18next';
import { SessionProvider } from 'next-auth/react';
import i18next from 'i18next';
import translations_es from '@/locales/es/global.json';
import translations_en from '@/locales/en/global.json';
import translations_es_login from '@/locales/es/login.json';
import translations_en_login from '@/locales/en/login.json';
// UI
import '@/styles/globals.css';

const queryClient = new QueryClient();

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	i18next.init({
		interpolation: { escapeValue: false },
		lng: 'es',
		resources: {
			es: {
				global: translations_es,
				login: translations_es_login,
			},
			en: {
				global: translations_en,
				login: translations_en_login,
			},
		},
	});
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
