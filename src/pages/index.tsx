import { Input } from "@/UI/1-atoms/Inputs/Input";
import { Title } from "@/UI/1-atoms/Text/Title";
import UserIcon from "@/svg/navBar/profileIcon.svg";

export default function Home() {
    return (
        <div className='bg-champagne-white'>
            <Title type='title'>Title</Title>
            <Input className=''
                type="text"
                text={'Escribe tu usuario...'}
                icon={<UserIcon className='w-full h-full text-dark-blue-transparency'/>}
            />
            <Title type='subtitle'>Subtitle</Title>

        </div>
    );
}
