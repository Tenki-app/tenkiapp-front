import { withAuth, NextRequestWithAuth } from 'next-auth/middleware';

export default withAuth(
	function middleware(req: NextRequestWithAuth) {
		// role users logic here
	},
	{
		callbacks: {
			authorized: ({ token }) => {
				return !!token;
			},
		},
		pages: {
			signIn: '/auth/login',
			error: '/auth/error',
		},
	}
);
