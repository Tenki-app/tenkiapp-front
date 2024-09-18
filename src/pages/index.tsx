import { withAuthenticationRequired } from '@auth0/auth0-react';

import { redirectToLoginPage } from '@/lib/helpers/redirect/redirects';

import { Loader } from '@/UI/molecules/loader/Loader';
import { MainLayout } from '@/UI/layouts/MainLayout';
import { TasksHome } from '@/UI/organisms/tasksHome/tasksHome';

const Home = () => {
    return (
        <MainLayout
            hasNav={true}
            className='md:pt-[90px]'
        >
            <div className='bg-champagne-white pb-[183px]'>
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
