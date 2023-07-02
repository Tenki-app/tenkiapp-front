import { useForm, FormProvider } from 'react-hook-form';

import { InputForm } from '@/UI/1-atoms/Inputs/InputForm';
import { Button } from '@/UI/1-atoms/Button/Button';
import { MainLayout } from '@/UI/4-layouts/MainLayout';
import { Text } from '@/UI/1-atoms/Text/Text';
import { LoginBanner } from '@/UI/3-organisms/login/LoginBanner';
import TenkiLogo from '@/svg/theme/tenkiLogo.svg';
import GoogleIcon from '@/svg/login/google.svg';
import EyeIcon from '@/svg/login/eyeIcon.svg';
import ProfileIcon from '@/svg/navbar/profileIcon.svg';

const Login = () => {
    const methods = useForm();

    const onSubmit = (data: any) => {};

    return (
        <MainLayout>
            <div className='flex h-screen'>
                <div className='hidden w-1/2 md:block'>
                    <LoginBanner />
                </div>
                <div className='text-center flex flex-col w-[75%] mx-auto items-center md:w-1/2'>
                    <TenkiLogo className='w-[140px] h-[170px] text-dark-blue mb-10' />
                    <FormProvider {...methods}>
                        <form
                            className='flex flex-col w-full md:max-w-[70%] 2xl:max-w-[50%] items-start'
                            onSubmit={methods.handleSubmit(onSubmit)}
                        >
                            <InputForm
                                name='username'
                                placeholder='Escribe tu usuario...'
                                designContainer='mb-12'
                                formValidations={{
                                    required: 'A username is required',
                                }}
                                icon={
                                    <ProfileIcon className='h-[20px] w-[20px] text-light-gray' />
                                }
                            />
                            <InputForm
                                name='password'
                                placeholder='Escribe tu contraseña...'
                                designContainer='mb-3 w-full'
                                formValidations={{
                                    required: 'A password is required',
                                }}
                                icon={
                                    <EyeIcon className='h-[22px] w-[22px] text-light-gray' />
                                }
                            />
                            <div className='flex justify-end w-full'>
                                <Button
                                    redirect=''
                                    className='text-gray font-medium text-base'
                                    variant='underline'
                                >
                                    ¿Olvidaste tu contraseña?
                                </Button>
                            </div>
                            <div className='my-20 flex flex-col w-full gap-6 items-center'>
                                <Button
                                    className=''
                                    type='submit'
                                >
                                    Iniciar sesión
                                </Button>
                                <Text className='font-semibold'>OR</Text>
                                <Button
                                    redirect=''
                                    className='flex gap-2 items-center'
                                >
                                    <GoogleIcon />
                                    Continua con google
                                </Button>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </MainLayout>
    );
};

export default Login;
