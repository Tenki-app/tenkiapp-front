import { useState } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import { redirectToLoginPage } from '@/lib/helpers/redirect/redirects';

import { Loader } from '@/UI/molecules/loader/Loader';
import { Input } from '@/UI/atoms/inputs/Input';
import { Title } from '@/UI/atoms/text/Title';
import ProfileIcon from '@/svg/navBar/profileIcon.svg';
import { Dropdown } from '@/UI/atoms/inputs/Dropdown';
import { StateDropdown } from '@/UI/atoms/inputs/stateDropDown';
import { useTranslation } from 'react-i18next';
import { Button } from '@/UI/atoms/button/Button';
import { MainLayout } from '@/UI/layouts/MainLayout';
import { ButtonLogin } from '@/UI/atoms/button/ButtonLogin';
import { ButtonLogout } from '@/UI/atoms/button/ButtonLogout';

const options = [
    {
        label: 'label',
        value: 'value',
    },
    {
        label: 'label2',
        value: 'value2',
    },
];

const Home = () => {
    const [translations, i18n] = useTranslation('global');

    const [hidden, setHidden] = useState(true);

    const showModal = () => {
        setHidden(!hidden);
    };

    const handleSignOut = () => {};

    return (
        <MainLayout
            hasNav={true}
            className='md:pt-[90px]'
        >
            <div className='bg-champagne-white w-screen h-screen p-12'></div>
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
