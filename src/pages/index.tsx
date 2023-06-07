import { Title } from '@/UI/1-atoms/Text/Title';
import { Dropdown } from '@/UI/1-atoms/Inputs/Dropdown';
import { Input } from '@/UI/1-atoms/Inputs/Input';
import UserIcon from '@/svg/navBar/profileIcon.svg';

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

export default function Home() {
    return (
        <div className='bg-champagne-white pb-60'>
            <Title type='title'>Title</Title>
            <Title type='subtitle'>Subtitle</Title>
            <Dropdown dropdownOptions={options} />
            <StateDropdown/>
            <Input className=''
                type="text"
                text={'Escribe tu usuario...'}
                icon={<UserIcon className='w-full h-full text-dark-blue-transparency'/>}/>
        </div>
    );
}
