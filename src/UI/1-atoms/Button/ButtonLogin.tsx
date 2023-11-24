import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { usePostSignInUser } from '@/lib/hooks/queries/useQueryUser';

import { Button } from './Button';

const ButtonLogin = () => {
	const { loginWithPopup, getIdTokenClaims } = useAuth0();
	const router = useRouter();
	const { t, i18n } = useTranslation();
	const { mutateAsync: postSignInUser } = usePostSignInUser();

	const handleLogin = async () => {
		try {
			await loginWithPopup();

			const credentials = await getIdTokenClaims();

			const userData = {
				name: credentials?.name,
				user_name: credentials?.nickname,
				email: credentials?.email,
			};

			const signInResponse = await postSignInUser(userData);

			if (signInResponse?.status === 200) {
				router.push('/');
			}
			if (signInResponse?.status === 201) {
				router.push('/onboarding');
			}
		} catch (error: unknown) {
			console.error(error);
			router.push('/login');
		}
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
