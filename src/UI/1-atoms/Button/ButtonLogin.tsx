import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';

import { Button } from './Button';
import { useTranslation } from 'react-i18next';

const ButtonLogin = () => {
	const { loginWithPopup, getIdTokenClaims } = useAuth0();
	const router = useRouter();
	const { t, i18n } = useTranslation();

	const handleLogin = async () => {
		await loginWithPopup();

		const credentials = await getIdTokenClaims();

		console.log(credentials);

		router.push('/');
	};

	return (
		<Button
			variant='custom'
			className='text-lg font-semibold bg-dark-blue text-champagne-white w-[286px] rounded-full px-8 py-2 dark:bg-champagne-white dark:text-dark-blue'
			onClick={handleLogin}
		>
			{t('login')}
		</Button>
	);
};

export { ButtonLogin };
