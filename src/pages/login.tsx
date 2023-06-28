import axios from 'axios';
import { useRouter } from 'next/router';

import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { useAppStore } from '@/lib/store/store';
import { usePostSingInUserQuery } from '@/lib/hooks/useQueryAppUser';

import TenkiLogo from '@/svg/theme/tenkiLogo.svg';
import { InputForm } from '@/UI/1-atoms/Inputs/InputForm';
import { Button } from '@/UI/1-atoms/Button/Button';

type TypeLoginFormValues = {
    username: string;
    password: string;
};

const Login = () => {
    const methods = useForm();
    const router = useRouter();

    const postSingInUserQuery = usePostSingInUserQuery();

    const onSubmit = (loginValues: any) => {
        postSingInUserQuery.mutateAsync(loginValues).then((res) => {
            router.push('/');
        });
    };

    return (
        <div className='text-center flex flex-col items-center'>
            <TenkiLogo className='w-[140px] h-[170px] text-dark-blue' />
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <InputForm
                        name='username'
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
