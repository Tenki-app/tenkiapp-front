import { withAuthenticationRequired } from '@auth0/auth0-react';

import { redirectToLoginPage } from '@/lib/helpers/redirect/redirects';
import HomeSlider from '@/UI/organisms/home/slider/HomeSlider';

import { Loader } from '@/UI/molecules/loader/Loader';
import { MainLayout } from '@/UI/layouts/MainLayout';
import { TasksHome } from '@/UI/organisms/tasksHome/tasksHome';

const Home = () => {
	return (
		<MainLayout hasMobileNav={true}>
			<div>
				<HomeSlider />
				<TasksHome />
			</div>
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
