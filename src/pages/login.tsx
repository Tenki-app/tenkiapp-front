import { useTranslation } from 'react-i18next';
import { MainLayout } from '@/UI/4-layouts/MainLayout';
import { LoginBanner } from '@/UI/3-organisms/Login/LoginBanner';
import TenkiLogo from '@/svg/theme/tenkiLogo.svg';
import { ThemeMode } from '@/UI/2-molecules/ThemeMode/ThemeMode';
import { SwitchLang } from '@/UI/2-molecules/SwitchLang/SwitchLang';
import { ButtonLogin } from '@/UI/1-atoms/Button/ButtonLogin';

const Login = () => {
	return (
		<MainLayout hasNav={false}>
			<div className='flex h-screen'>
				<div className='hidden w-1/2 md:block'>
					<LoginBanner />
				</div>
				<div className='flex flex-col items-center w-full md:w-1/2'>
					<div className='pl-[10px] pr-[10px] flex justify-between w-full pb-[18%] md:pl-[5%] md:pr-[5%] 2xl:pl-[10%] 2xl:pr-[10%] 2xl:pt-[4%] 2xl:pb-[12%] pt-[15px]'>
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
