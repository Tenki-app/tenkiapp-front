import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';

import { useForm, FormProvider } from 'react-hook-form';
import { fetchPostSignIn } from '@/lib/helpers/fetchAuth';

import { InputForm } from '@/UI/1-atoms/Inputs/InputForm';
import { Button } from '@/UI/1-atoms/Button/Button';
import { MainLayout } from '@/UI/4-layouts/MainLayout';
import { Text } from '@/UI/1-atoms/Text/Text';
import { LoginBanner } from '@/UI/3-organisms/login/LoginBanner';
import TenkiLogo from '@/svg/theme/tenkiLogo.svg';
import GoogleIcon from '@/svg/login/google.svg';
import EyeIcon from '@/svg/login/eyeIcon.svg';
import ProfileIcon from '@/svg/navBar/profileIcon.svg';
import { useTranslation } from 'react-i18next';
import { SwitchLang } from '@/UI/2-molecules/SwitchLang/SwitchLang';

import type { TypeFormLogin } from '@/lib/types/user';

const Login = () => {
    const [translations, i18n] = useTranslation('login');
    const methods = useForm<TypeFormLogin>();
    const router = useRouter();
    const session = useSession()

    console.log(session);

    const onCredentialsSignIn = async (loginValues: TypeFormLogin) => {
        let userValues = {
            username: loginValues.username,
            password: loginValues.password,
        };

        fetchPostSignIn(userValues).then((res) => {
            if (res?.status === 200) {
                signIn('credentials', {
                    username: loginValues.username,
                    password: loginValues.password,
                    redirect: false,
                }).then(() => {
                    router.push('/');
                });
            } else if (res?.response.data.code === 401) {
                methods.setError('username', {
                    message: 'Incorrect username',
                });
                methods.setError('password', {
                    message: 'Incorrect password',
                });
            }
        });
    };

    const onGoogleSignIn = () => {
        signIn('google');
    }

    /* useEffect(() => {
        console.log('is working');
        const isGoogleSession = session.data?.type === 'google';
        if (isGoogleSession) {
            signIn('credentials', {
                username: session?.data?.user.email,
                password: session?.data?.user._id,
                redirect: false,
            }).then(() => {
                router.push('/');
            });
        }
    }, [session]); */

    return (
        <MainLayout>
            <div className='flex h-screen'>
                <div className='hidden w-1/2 md:block'>
                    <LoginBanner />
                </div>
                <div className='text-center flex flex-col w-[75%] mx-auto items-center md:w-1/2'>
                    <div>
                        <SwitchLang />
                    </div>

                    <TenkiLogo className='w-[140px] h-[170px] text-dark-blue mb-10' />
                    <FormProvider {...methods}>
                        <form
                            className='flex flex-col w-full md:max-w-[70%] 2xl:max-w-[50%] items-start'
                            onSubmit={methods.handleSubmit(onCredentialsSignIn)}
                        >
                            <InputForm
                                name='username'
                                placeholder={translations('userName')}
                                designContainer='mb-12'
                                formValidations={{
                                    required: translations('userNameRequired'),
                                }}
                                icon={
                                    <ProfileIcon className='h-[20px] w-[20px] text-light-gray' />
                                }
                            />
                            <InputForm
                                name='password'
                                placeholder={translations('password')}
                                designContainer='mb-3 w-full'
                                type='password'
                                formValidations={{
                                    required: translations('passwordRequired'),
                                }}
                                icon={
                                    <EyeIcon className='h-[22px] w-[22px] text-light-gray cursor-pointer' />
                                }
                            />
                            <div className='flex justify-end w-full'>
                                <Button
                                    redirect=''
                                    className='text-gray font-medium text-base'
                                    variant='underline'
                                >
                                    {translations('forgotPassword')}
                                </Button>
                            </div>
                            <div className='my-20 flex flex-col w-full gap-6 items-center'>
                                <Button
                                    className=''
                                    type='submit'
                                >
                                    {translations('login')}
                                </Button>
                                <Text className='font-semibold'>OR</Text>
                                <Button
                                    type='button'
                                    redirect=''
                                    className='flex gap-2 items-center'
                                    onClick={onGoogleSignIn}
                                >
                                    <GoogleIcon />
                                    {translations('continueWithGoogle')}
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
