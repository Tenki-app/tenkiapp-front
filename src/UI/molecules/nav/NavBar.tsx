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
	const handleActiveStyles = (option: NavType) => {
		let activeStyles = 'w-[32px] h-[32px] ';
		if (navOption === option) {
			activeStyles += 'text-light-blue';
		} else {
			activeStyles += 'text-champagne-white';
		}
		return activeStyles;
	};
	return (
		<nav className='w-[375px] h-[69px] bg-dark-blue'>
			<ul className='h-full flex justify-around items-center'>
				<li onClick={() => handleActive('Home')}>
					<Link href={''}>
						<HomeIcon
							className={handleActiveStyles('Home')}
						></HomeIcon>
					</Link>
				</li>
				<li onClick={() => handleActive('Task')}>
					<Link href={''}>
						<TasksIcon
							className={handleActiveStyles('Task')}
						></TasksIcon>
					</Link>
				</li>
				<li onClick={() => handleActive('Profile')}>
					<Link href={''}>
						<ProfileIcon
							className={handleActiveStyles('Profile')}
						></ProfileIcon>
					</Link>
				</li>
				<li onClick={() => handleActive('Notification')}>
					<Link href={''}>
						<NotificationIcon
							className={handleActiveStyles('Notification')}
						></NotificationIcon>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
