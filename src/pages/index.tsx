import Title from "@/UI/1-atoms/Text/Title";
import TenkiLogo from "@/svg/tenki-logo.svg";

export default function Home() {
    return (
        <div>
            <TenkiLogo className='w-[50px] h-[50px] text-olive-drab' />
            <Title>Hi, this is Tenki</Title>
        </div>
    );
}
