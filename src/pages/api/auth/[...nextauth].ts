import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { fetchPostSignIn } from '@/lib/hooks/queries/useQueryAppUser';

import type { NextAuthOptions } from 'next-auth';
import type { NextApiRequest, NextApiResponse } from 'next';
import { basicApi } from '@/lib/utils/axios';

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

                    const response = await basicApi.post(
                        '/auth/login',
                        userReq,
                        {
                            withCredentials: true,
                        }
                    );

                    if (credentials?.username === response?.data.user.name) {
                        return response.data;
                    } else {
                        return null;
                    }
                },
            }),
        ],
        callbacks: {
            async jwt({ token, user }: { token: any; user: any }) {
                if (user) {
                    return {
                        accessToken: user.accessToken,
                        ...user,
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
