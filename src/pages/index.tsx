import { useState } from 'react';
import { ProtectedRoute } from '@/UI/4-layouts/ProtectedRoute';

import { Input } from '@/UI/1-atoms/Inputs/Input';
import { Title } from '@/UI/1-atoms/Text/Title';
import UserIcon from '@/svg/navBar/profileIcon.svg';
import { Dropdown } from '@/UI/1-atoms/Inputs/Dropdown';
import { StateDropdown } from '@/UI/1-atoms/Inputs/stateDropDown';

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
    const [hidden, setHidden] = useState(true);
    const showModal = () => {
        setHidden(!hidden);
    };

    return (
        <ProtectedRoute>
            <div className='bg-champagne-white pb-60'>
                <Title type='title'>Title</Title>
                <Title type='subtitle'>Subtitle</Title>
                <Dropdown dropdownOptions={options} />
                <button onClick={() => showModal()}>State</button>
                <StateDropdown
                    className={hidden ? '!hidden' : '!block'}
                    showModal={showModal}
                />
                <Input
                    className=''
                    type='text'
                    text={'Escribe tu usuario...'}
                    icon={
                        <UserIcon className='w-full h-full text-dark-blue-transparency' />
                    }
                />
            </div>
        </ProtectedRoute>
    );
};

export default Home;
