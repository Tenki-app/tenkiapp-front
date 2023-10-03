'use-client';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { useForm, FormProvider } from 'react-hook-form';
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
import type { TypeFormLogin } from '@/lib/types/user';
import { ThemeMode } from '@/UI/2-molecules/ThemeMode/ThemeMode';
import { SwitchLang } from '@/UI/2-molecules/SwitchLang/SwitchLang';
import { useEffect, useState } from 'react';
import { Loader } from '@/UI/2-molecules/Loader/Loader';

const Login = () => {
	const [loading, setLoading] = useState(true);
	const { t, i18n } = useTranslation();
	const methods = useForm<TypeFormLogin>();
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2500);
	});
	const onSubmit = async (loginValues: TypeFormLogin) => {
		signIn('credentials', {
			username: loginValues.username,
			password: loginValues.password,
			redirect: false,
		}).then((res) => {
			if (res?.status === 200) {
				router.push('/');
			} else if (res?.status === 401) {
				methods.setError('username', {
					message: 'Incorrect username',
				});
				methods.setError('password', {
					message: 'Incorrect password',
				});
			}
		});
	};
	if (loading) {
		return <Loader />;
	}
	return (
		<MainLayout hasNav={false}>
			<div className='flex h-screen'>
				<div className='hidden w-1/2 md:block'>
					<LoginBanner />
				</div>
				<div className='text-center flex flex-col w-[75%] mx-auto items-center md:w-1/2'>
					<div className='flex self-start mb-[18%] ml-[-10%] md:ml-[5%] 2xl:ml-[10%] 2xl:mt-[4%] 2xl:mb-[12%] mt-[15px]'>
						<ThemeMode />
						<SwitchLang />
					</div>
					<div>
						<TenkiLogo className='w-[140px] h-[170px] text-dark-blue mb-10 dark:text-champagne-white' />
					</div>
					<FormProvider {...methods}>
						<form
							className='flex flex-col w-full md:max-w-[70%] 2xl:max-w-[50%] items-start'
							onSubmit={methods.handleSubmit(onSubmit)}
						>
							<InputForm
								name='username'
								placeholder={t('userName')}
								designContainer='mb-12'
								formValidations={{
									required: t('userNameRequired'),
								}}
								icon={
									<ProfileIcon className='h-[20px] w-[20px] text-light-gray dark:text-champagne-white-middleTransparency' />
								}
							/>
							<InputForm
								name='password'
								placeholder={t('password')}
								designContainer='mb-3 w-full'
								type='password'
								formValidations={{
									required: t('passwordRequired'),
								}}
								icon={
									<EyeIcon className='h-[22px] w-[22px] text-light-gray dark:text-champagne-white-middleTransparency cursor-pointer' />
								}
							/>
							<div className='flex justify-end w-full'>
								<Button
									redirect=''
									className='dark:text-champagne-white-middleTransparency dark:font-medium dark:text-base text-gray font-medium text-base'
									variant='underline'
								>
									{t('forgotPassword')}
								</Button>
							</div>
							<div className='my-20 flex flex-col w-full gap-6 items-center'>
								<Button
									className=''
									type='submit'
								>
									{t('login')}
								</Button>
								<Text className='font-semibold dark:font-semibold dark:text-champagne-white'>
									{t('or')}
								</Text>
								<Button
									redirect=''
									className='flex gap-2 items-center'
								>
									<GoogleIcon />
									{t('continueWithGoogle')}
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
