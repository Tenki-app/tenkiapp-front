import HomeIcon from '@/svg/navBar/homeIcon.svg';
import TasksIcon from '@/svg/navBar/tasksIcon.svg';
import ProfileIcon from '@/svg/navBar/profileIcon.svg';
import NotificationIcon from '@/svg/navBar/notificationIcon.svg';
import Link from 'next/link';
import { NavType } from '@/lib/types/navBar';
import { Text } from '@/UI/atoms/text/Text';
import { useAppStore } from '@/lib/store/store';
import { useTranslation } from 'react-i18next';
import { SwitchLang } from '@/UI/molecules/switchLang/SwitchLang';
import { ThemeMode } from '../themeMode/ThemeMode';

export const NavBar = () => {
	const { navOption, setNavOption } = useAppStore();
	const { t } = useTranslation();
	const handleActive = (option: NavType) => {
		setNavOption(option);
	};
	const handleActiveStyles = (option: NavType): string => {
		let activeStyles = 'w-[32px] h-[32px] md:w-[25px] md:h-[25px] ';
		if (navOption === option) {
			activeStyles += 'text-light-blue';
		} else {
			activeStyles += 'text-champagne-white';
		}
		return activeStyles;
	};

	const handleLinkActiveStyles = (option: NavType): string => {
		let linkActiveStyles =
			'main-transition flex flex-row justify-center items-center relative ';
		if (navOption === option) {
			linkActiveStyles +=
				'bg-dark-blue-transparent block py-[11px] px-[22px] rounded-md relative flex flex-row justify-center items-center relative text-light-blue';
		} else {
			linkActiveStyles += 'text-champagne-white';
		}
		return linkActiveStyles;
	};

	const handleDivActive = (option: NavType): string => {
		if (navOption === option) {
			return 'bg-light-blue w-[80%] h-[3px] absolute bottom-0 rounded';
		} else {
			return '';
		}
	};

	return (
		<nav className='w-full h-[69px] md:h-[80px] fixed left-0 z-[90] bottom-0 bg-dark-blue md:top-0 md:pb-[3px]'>
			<div className='h-full flex items-center justify-between'>
				<ul className='h-full flex justify-evenly items-center gap-10 w-full md:w-auto px-6 md:pl-11'>
					<li onClick={() => handleActive('Home')}>
						<Link
							href={'/'}
							className={handleLinkActiveStyles('Home')}
						>
							<HomeIcon
								className={handleActiveStyles('Home')}
							></HomeIcon>
							<div className={handleDivActive('Home')}></div>
							<Text
								className='hidden md:block ml-[10px] font-bold'
								variant='custom'
							>
								{t('home')}
							</Text>
						</Link>
					</li>
					<li onClick={() => handleActive('Task')}>
						<Link
							href={'/tasks'}
							className={handleLinkActiveStyles('Task')}
						>
							<TasksIcon
								className={handleActiveStyles('Task')}
							></TasksIcon>
							<div className={handleDivActive('Task')}></div>
							<Text
								className='hidden md:block ml-[10px] font-bold'
								variant='custom'
							>
								{t('tasks')}
							</Text>
						</Link>
					</li>
					<li onClick={() => handleActive('Profile')}>
						<Link
							href={'/profile'}
							className={handleLinkActiveStyles('Profile')}
						>
							<ProfileIcon
								className={handleActiveStyles('Profile')}
							></ProfileIcon>
							<div className={handleDivActive('Profile')}></div>
							<Text
								className='hidden md:block ml-[10px] font-bold'
								variant='custom'
							>
								{t('profile')}
							</Text>
						</Link>
					</li>
					<li
						onClick={() => handleActive('Notification')}
						className='block md:hidden'
					>
						<Link
							href={''}
							className={handleLinkActiveStyles('Notification')}
						>
							<NotificationIcon
								className={handleActiveStyles('Notification')}
							></NotificationIcon>
							<div
								className={handleDivActive('Notification')}
							></div>
						</Link>
					</li>
				</ul>
				<ul className='flex items-center gap-5'>
					<li className='w-fit'>
						<SwitchLang/>
					</li>
					<li className='w-fit'>
						<ThemeMode/>
					</li>
					<li
						onClick={() => handleActive('Notification')}
						className='hidden md:block md:pr-11 w-fit'
					>
						<Link
							href={''}
							className={handleLinkActiveStyles('Notification')}
						>
							<NotificationIcon
								className={handleActiveStyles('Notification')}
							></NotificationIcon>
							<div className={handleDivActive('Notification')}></div>
						</Link>

					</li>
				</ul>
				
			</div>
		</nav>
	);
};
