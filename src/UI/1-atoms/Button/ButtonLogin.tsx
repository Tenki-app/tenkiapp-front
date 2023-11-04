import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';

import { Button } from './Button';
import { useTranslation } from 'react-i18next';

const ButtonLogin = () => {
	const { loginWithPopup } = useAuth0();
	const router = useRouter();
	const { t, i18n } = useTranslation();
	return (
		<Button
			variant='custom'
			className='text-lg font-semibold bg-dark-blue text-champagne-white w-[286px] rounded-full px-8 py-2 dark:bg-champagne-white dark:text-dark-blue'
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
			{t('login')}
		</Button>
	);
};

export { ButtonLogin };
