import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { NextAuthOptions } from 'next-auth';
import { fetchPostSignIn } from '@/lib/hooks/useQueryAppUser';

export default NextAuth({
    pages: {
        signIn: '/auth/login',
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {},
                password: {},
            },
            async authorize(credentials, req) {
                // TODO: Do login fetch
                const user = {
                    id: '42',
                    name: 'silvestre',
                    password: '12345',
                };

                if (
                    credentials?.username === user.name &&
                    credentials?.password === user.password
                ) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
});
