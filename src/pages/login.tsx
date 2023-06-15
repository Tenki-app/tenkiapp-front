import axios from 'axios';

import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { useAppStore } from '@/lib/store/store';

import TenkiLogo from '@/svg/theme/tenkiLogo.svg';
import { InputForm } from '@/UI/1-atoms/Inputs/InputForm';
import { Button } from '@/UI/1-atoms/Button/Button';

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
};

const Login = () => {
    const methods = useForm();
    const { user } = useAppStore();

    const onSubmit = (data: any) => {
        console.log(data);

        axios
            .post('http://localhost:3001/auth/login', { data })
            .then((res) => console.log(res));
    };

    return (
        <div className='text-center flex flex-col items-center'>
            <TenkiLogo className='w-[140px] h-[170px] text-dark-blue' />
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <InputForm
                        name='user_name'
                        placeholder='Escribe tu usuario...'
                        designContainer='mb-8'
                        formValidations={{ required: 'A username is required' }}
                    />
                    <InputForm
                        name='password'
                        placeholder='Escribe tu contraseña...'
                        designContainer='mb-8'
                        formValidations={{ required: 'A password is required' }}
                    />
                    <Button type='submit'>Iniciar sesión</Button>
                </form>
            </FormProvider>
        </div>
    );
};

export default Login;
