// 3rd Party
import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { I18nextProvider } from 'react-i18next';
import { SessionProvider } from 'next-auth/react';
import { i18next } from './../lib/utils/i18n';
// UI
import '@/styles/globals.css';

const queryClient = new QueryClient();

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
