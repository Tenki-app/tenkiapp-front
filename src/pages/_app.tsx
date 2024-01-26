import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { I18nextProvider } from 'react-i18next';
import { Auth0Provider } from '@auth0/auth0-react';
import { i18next } from './../lib/utils/i18n';
import { useState, useEffect } from 'react';
import Router from 'next/router';

import type { AppProps } from 'next/app';

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
		<Auth0Provider
			domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN ?? ''}
			clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID ?? ''}
			authorizationParams={{
				redirect_uri:
					typeof window !== 'undefined' ? window.location.origin : '',
			}}
		>
			<QueryClientProvider client={queryClient}>
				<I18nextProvider i18n={i18next}>
					<Component {...pageProps} />
					{/* <ReactQueryDevtools /> */}
				</I18nextProvider>
			</QueryClientProvider>
		</Auth0Provider>
	);
}
