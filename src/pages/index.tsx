import Title from "@/UI/1-atoms/Text/Title";
import TenkiLogo from "@/svg/theme/tenkiLogo.svg";

export default function Home() {
    return (
        <div>
            <TenkiLogo
                className='text-blue-900 w-[100px] h-[100px]'
                onClick
            />
            <Title>Hi, this is Tenki</Title>
        </div>
    );
}
