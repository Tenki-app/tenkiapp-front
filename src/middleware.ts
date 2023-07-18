import { withAuth } from 'next-auth/middleware';

export default withAuth(function middleware(req) {}, {
    callbacks: {
        authorized: ({ token }) => {
            return token !== null;
        },
    },
    pages: {
        signIn: '/auth/login',
        error: '/auth/error',
    },
});

export const config = { matcher: ['/test-page'] };
