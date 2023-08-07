import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import { fetchPostSignIn } from '@/lib/helpers/fetchAuth';

import type { NextAuthOptions } from 'next-auth';
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
                    const userReq = {
                        username: credentials?.username as string,
                        password: credentials?.password as string,
                    };

                    const response = await fetchPostSignIn(userReq);

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
                const isGoogleProvider = account?.provider !== 'google';
                if (user && !isGoogleProvider) {
                    return {
                        accessToken: user.accessToken,
                        ...user,
                    };
                }
                if (isGoogleProvider) {
                    return {
                        type: 'google',
                        user: {
                            email: token?.email,
                            name: token?.name,
                            user_name: token?.name,
                            _id: token?.id,
                        },
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
