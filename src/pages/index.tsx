import { useSession, signOut } from 'next-auth/react';

import {
    usePostSingleTask,
    useGetAllTasks,
} from '@/lib/hooks/queries/useQueryTask';
import { useRefreshToken } from '@/lib/hooks/axios/useRefreshToken';

import { Input } from '@/UI/1-atoms/Inputs/Input';
import { Title } from '@/UI/1-atoms/Text/Title';
import ProfileIcon from '@/svg/navBar/profileIcon.svg';
import { Dropdown } from '@/UI/1-atoms/Inputs/Dropdown';
import { StateDropdown } from '@/UI/1-atoms/Inputs/stateDropDown';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/UI/1-atoms/Button/Button';

import { basicApi } from '@/lib/utils/axios';
import { fetchPostSignIn } from '@/lib/hooks/queries/useQueryAppUser';

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

export default function Home() {
    const [translations, i18n] = useTranslation('global');
    const [hidden, setHidden] = useState(true);
    const session = useSession();

    /* console.log('session: ', session); */

    /*  const postSingleTask = usePostSingleTask();
    const getAllTasks = useGetAllTasks(); */

    const handleLogin = async () => {
        let userReq = {
            username: 'silvestre',
            password: '12345',
        };
        let res = await basicApi.post('/auth/login', userReq, {
            withCredentials: true,
        });
    };

    const handleRefresh = async () => {
        let res2 = await basicApi.get('/auth/refresh', {
            withCredentials: true,
        });
    };

    const showModal = () => {
        setHidden(!hidden);
    };

    const handleSignOut = () => {
        signOut();
    };

    return (
        <div className='bg-champagne-white w-screen h-screen p-12'>
            <div className='flex justify-end'>
                <Button onClick={handleSignOut}>Sign Out</Button>
            </div>
            <Title type='title'>Title</Title>
            <Title type='subtitle'>Subtitle</Title>
            <Dropdown dropdownOptions={options} />
            <button onClick={() => showModal()}>
                {translations('buttonLabel')}
            </button>
            <div className='w-full'>
                <button
                    className='border border-black'
                    onClick={handleLogin}
                >
                    Do login
                </button>
                <button
                    className='border border-black'
                    onClick={handleRefresh}
                >
                    Do refresh
                </button>
            </div>
            <br />
            <button
                className='bg-dark-blue text-champagne-white p-2'
                onClick={() => i18n.changeLanguage('es')}
            >
                ESPAÑOL
            </button>
            <br />
            <br />
            <button
                className='bg-dark-blue text-champagne-white p-2'
                onClick={() => i18n.changeLanguage('en')}
            >
                ENGLISH
            </button>
            <StateDropdown
                className={hidden ? '!hidden' : '!block'}
                showModal={showModal}
            />
            <Input
                className=''
                type='text'
                text={'Escribe tu usuario...'}
                icon={
                    <ProfileIcon className='w-full h-full text-dark-blue-transparency' />
                }
            />
        </div>
    );
}
