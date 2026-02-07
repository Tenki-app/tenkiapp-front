import { withAuthenticationRequired } from '@auth0/auth0-react';

import { useAppStore } from '@/lib/store/store';
import { useAuth0 } from '@auth0/auth0-react';
import { redirectToLoginPage } from '@/lib/helpers/redirect/redirects';

import { MainLayout } from '@/UI/layouts/MainLayout';
import { ProfileHeader } from '@/UI/molecules/profile/ProfileHeader';
import { Loader } from '@/UI/molecules/loader/Loader';
import { useGetAllTasksByCategory } from '@/lib/hooks/queries/useQueryTask';

const Profile = () => {
	const { user } = useAppStore();
	const { user: userAuth } = useAuth0();

	const { allTasksByCategory } = useGetAllTasksByCategory('today', user?.id);

	return (
		<>
			<MainLayout
				className='md:pt-[90px] px-4 lg:max-w-[950px] lg:mx-auto'
				hasMobileNav={true}
			>
				<div className='pt-4'>
					<ProfileHeader
						profileName={user?.name ?? ''}
						profileEmail={user?.email ?? ''}
						profileImageSrc={userAuth?.picture}
						numberPendingTasks={4}
					/>
				</div>
			</MainLayout>
		</>
	);
};
export default withAuthenticationRequired(Profile, {
	onRedirecting: () => <Loader />,
	onBeforeAuthentication: () =>
		new Promise(() => {
			redirectToLoginPage();
		}),
});
