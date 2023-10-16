import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';

import { Button } from './Button';

const ButtonLogin = () => {
	const { loginWithPopup } = useAuth0();
	const router = useRouter();

	return (
		<Button
			variant='blue'
			onClick={() => {
				loginWithPopup()
					.then(() => {
						router.push('/');
					})
					.catch((err) => {
						console.error(err);
					});
			}}
		>
			Login
		</Button>
	);
};

export { ButtonLogin };
