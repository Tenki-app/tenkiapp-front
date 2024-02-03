import { MainLayout } from '@/UI/layouts/MainLayout';
import { LoginBanner } from '@/UI/organisms/login/LoginBanner';
import TenkiLogo from '@/svg/theme/tenkiLogo.svg';
import { ThemeMode } from '@/UI/molecules/themeMode/ThemeMode';
import { SwitchLang } from '@/UI/molecules/switchLang/SwitchLang';
import { ButtonLogin } from '@/UI/atoms/button/ButtonLogin';

const Login = () => {
	return (
		<MainLayout hasNav={false}>
			<div className='flex h-screen'>
				<div className='hidden w-1/2 md:block'>
					<LoginBanner />
				</div>
				<div className='flex flex-col items-center w-full md:w-1/2'>
					<div className='pl-[10px] pr-[10px] flex justify-between w-full md:pl-[5%] md:pr-[5%] pt-[15px] 2xl:py-12'>
						<div className='flex items-center'>
							<ThemeMode />
							<SwitchLang />
						</div>
					</div>
					<div className='text-center flex flex-col w-[75%] mx-auto items-center'>
						<div className='mt-[70px]'>
							<TenkiLogo className='w-[250px] h-[300px] text-dark-blue mb-10 dark:text-champagne-white' />
						</div>
						<ButtonLogin />
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default Login;
