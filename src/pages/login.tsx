import { useForm, FormProvider } from 'react-hook-form';

import TenkiLogo from '@/svg/theme/tenkiLogo.svg';
import { InputForm } from '@/UI/1-atoms/Inputs/InputForm';
import { Button } from '@/UI/1-atoms/Button/Button';

const Login = () => {
    const methods = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        console.log('data');
    };

    return (
        <div className='text-center flex flex-col items-center'>
            <TenkiLogo className='w-[140px] h-[170px] text-dark-blue' />
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <InputForm
                        name='username'
                        placeholder='Escribe tu usuario...'
                        className='mb-8'
                        formValidations={{ required: true }}
                    />
                    <InputForm
                        name='password'
                        placeholder='Escribe tu contraseña...'
                        className='mb-12'
                    />
                    <button type='submit'>Iniciar sesión</button>
                </form>
            </FormProvider>
        </div>
    );
};

export default Login;
