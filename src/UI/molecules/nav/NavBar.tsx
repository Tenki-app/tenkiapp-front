import HomeIcon from '@/svg/navBar/homeIcon.svg';
import TasksIcon from '@/svg/navBar/tasksIcon.svg';
import ProfileIcon from '@/svg/navBar/profileIcon.svg';
import NotificationIcon from '@/svg/navBar/notificationIcon.svg';
import Link from 'next/link';
import { NavType } from '@/lib/types/navBar';
import { useState } from 'react';

export const NavBar = () => {
	const [navOption, setNavOption] = useState<NavType>('Home');
	const handleActive = (option: NavType) => {
		setNavOption(option);
	};
	const handleActiveStyles = (option: NavType): string => {
		let activeStyles = 'w-[32px] h-[32px] ';
		if (navOption === option) {
			activeStyles += 'text-light-blue';
		} else {
			activeStyles += 'text-champagne-white';
		}
		return activeStyles;
	};

	const handleLinkActiveStyles = (option: NavType): string => {
		let linkActiveStyles = '';
		if (navOption === option) {
			linkActiveStyles +=
				'main-transition bg-dark-blue-transparent block py-[11px] px-[22px] border-b-4 border-b-light-blue rounded-md';
		}
		return linkActiveStyles;
	};
	return (
		<nav className='w-full h-[69px] fixed z-[90] bottom-0 bg-dark-blue'>
			<ul className='h-full flex justify-around items-center'>
				<li onClick={() => handleActive('Home')}>
					<Link
						href={''}
						className={handleLinkActiveStyles('Home')}
					>
						<HomeIcon
							className={handleActiveStyles('Home')}
						></HomeIcon>
					</Link>
				</li>
				<li onClick={() => handleActive('Task')}>
					<Link
						href={''}
						className={handleLinkActiveStyles('Task')}
					>
						<TasksIcon
							className={handleActiveStyles('Task')}
						></TasksIcon>
					</Link>
				</li>
				<li onClick={() => handleActive('Profile')}>
					<Link
						href={''}
						className={handleLinkActiveStyles('Profile')}
					>
						<ProfileIcon
							className={handleActiveStyles('Profile')}
						></ProfileIcon>
					</Link>
				</li>
				<li onClick={() => handleActive('Notification')}>
					<Link
						href={''}
						className={handleLinkActiveStyles('Notification')}
					>
						<NotificationIcon
							className={handleActiveStyles('Notification')}
						></NotificationIcon>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
