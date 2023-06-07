import TenkiLogo from '@/svg/theme/tenkiLogo.svg';
import { Input } from '@/UI/1-atoms/Inputs/Input';
import { Button } from '@/UI/1-atoms/Button/Button';

const Login = () => {
    return (
        <div className='text-center flex flex-col items-center'>
            <TenkiLogo className='w-[140px] h-[170px] text-dark-blue' />
            <Input
                text='Escribe tu usuario...'
                className='mb-8'
            />
            <Input
                text='Escribe tu contraseña...'
                className='mb-12'
            />
            <Button>Iniciar sesión</Button>
        </div>
    );
};

export default Login;
