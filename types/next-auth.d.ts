import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        accessToken: string;
        user: {
            email: string;
            name: string;
            user_name: string;
            _id: string;
        };
    }
}
