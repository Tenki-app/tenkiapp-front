import { withAuthenticationRequired } from '@auth0/auth0-react';

import { redirectToLoginPage } from '@/lib/helpers/redirect/redirects';
import HomeSlider from '@/UI/organisms/home/slider/HomeSlider';

import { Loader } from '@/UI/molecules/loader/Loader';
import { MainLayout } from '@/UI/layouts/MainLayout';

const Home = () => {
	return (
		<MainLayout
			hasNav={true}
			className='md:pt-[90px]'
		>
			<HomeSlider />
		</MainLayout>
	);
};

export default withAuthenticationRequired(Home, {
	onRedirecting: () => <Loader />,
	onBeforeAuthentication: () =>
		new Promise(() => {
			redirectToLoginPage();
		}),
});
