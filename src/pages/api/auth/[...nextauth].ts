import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import { fetchPostSignIn, fetchPostGoogleAuth } from '@/lib/helpers/fetchAuth';

import type { NextApiRequest, NextApiResponse } from 'next';

type typeJWT = {
	token: any;
	user: any;
	account: any;
};

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
	return await NextAuth(req, res, {
		session: {
			strategy: 'jwt',
		},
		pages: {
			signIn: '/auth/login',
			error: '/auth/error',
		},
		providers: [
			CredentialsProvider({
				name: 'Credentials',
				credentials: {
					username: {},
					password: {},
				},
				async authorize(credentials, req): Promise<any> {
					const loginValues = {
						username: credentials?.username as string,
						password: credentials?.password as string,
					};

					const response = await fetchPostSignIn(loginValues);

					if (credentials?.username === response?.data.user.name) {
						return response.data;
					} else {
						return null;
					}
				},
			}),
			GoogleProvider({
				id: 'google',
				clientId: process.env.GOOGLE_CLIENT_ID ?? '',
				clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
			}),
		],
		callbacks: {
			async jwt({ token, user, account }: typeJWT) {
				if (user && account?.provider === 'credentials') {
					return {
						accessToken: user.accessToken,
						...user,
					};
				}
				if (token?.type === 'credentials' && !user && !account) {
					let finalData = JSON.parse(JSON.stringify(token));
					delete finalData.type;
					return { ...finalData };
				}
				if (account?.provider === 'google' && token) {
					const loginValues = {
						email: token?.email,
						password: token?.sub,
					};
					const googleUser = await fetchPostGoogleAuth(loginValues);
					return {
						type: 'google',
						accessToken: googleUser.data.accessToken,
						user: googleUser.data.user,
					};
				}
				return { ...token };
			},
			async session({ session, token, user }) {
				session = token as any;
				return session;
			},
		},
	});
}
