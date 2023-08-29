import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { I18nextProvider } from 'react-i18next';
import { SessionProvider } from 'next-auth/react';
import { i18next } from './../lib/utils/i18n';
import { useState, useEffect } from 'react';

import '@/styles/globals.css';

const queryClient = new QueryClient();

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	const [isInitialRender, setIsInitialRender] = useState(false);

	useEffect(() => {
		setIsInitialRender(true);
	}, []);

	if (!isInitialRender) return <></>;

	return (
		<QueryClientProvider client={queryClient}>
			<I18nextProvider i18n={i18next}>
				<SessionProvider session={session}>
					<Component {...pageProps} />
					<ReactQueryDevtools />
				</SessionProvider>
			</I18nextProvider>
		</QueryClientProvider>
	);
}
