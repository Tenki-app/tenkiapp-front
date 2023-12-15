import LoginImageOne from '@/svg/login/login1.svg';
import LoginImageTwo from '@/svg/login/login2.svg';
import LoginImageThree from '@/svg/login/login3.svg';

const LoginBanner = () => {
    return (
        <div className='w-full h-full bg-dark-blue relative overflow-hidden'>
            <LoginImageOne className='h-[23%] w-[60%] left-[-8%] top-[3%] absolute' />
            <LoginImageTwo className='w-[85%] h-[38%] absolute top-[27%] right-[-15%]' />
            <LoginImageThree className='w-[75%] h-[31%] absolute bottom-[3%] left-[-10%]' />
        </div>
    );
};

export { LoginBanner };
