import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from 'react-i18next';

import { Button } from './Button';

const ButtonLogout = () => {
	const { logout } = useAuth0();
	const { t } = useTranslation();

	return (
		<Button
			variant='blue'
			type='submit'
			onClick={() => {
				localStorage.clear();
				logout({
					logoutParams: {
						returnTo: `${window.location.origin}/login`,
					},
				});
			}}
		>
			{t('logout')}
		</Button>
	);
};

export { ButtonLogout };
