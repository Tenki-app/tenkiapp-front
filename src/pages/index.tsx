import { Input } from '@/UI/1-atoms/Inputs/Input';
import { Title } from '@/UI/1-atoms/Text/Title';
import UserIcon from '@/svg/navBar/profileIcon.svg';
import { Dropdown } from '@/UI/1-atoms/Inputs/Dropdown';

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
            <Input />
        </div>
    );
}
