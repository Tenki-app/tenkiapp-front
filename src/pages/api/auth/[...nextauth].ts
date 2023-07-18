import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { fetchPostSignIn } from '@/lib/hooks/useQueryAppUser';
import type { NextAuthOptions } from 'next-auth';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    return await NextAuth(req, res, {
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

                    if (credentials?.username === response?.user.name) {
                        return response;
                    } else {
                        return null;
                    }
                },
            }),
        ],
        callbacks: {
            async jwt({ token, user }) {
                return { ...token, ...user };
            },
            async session({ session, token, user }) {
                session.user = token;
                return session;
            },
        },
    });
}
