import HomeIcon from '@/svg/navBar/homeIcon.svg';
import TasksIcon from '@/svg/navBar/tasksIcon.svg';
import ProfileIcon from '@/svg/navBar/profileIcon.svg';
import NotificationIcon from '@/svg/navBar/notificationIcon.svg';

export const NavBar = () => {
	return (
		<nav className='w-[375px] h-[69px] bg-dark-blue'>
			<ul className='h-full flex justify-around items-center'>
				<li>
					<HomeIcon className='w-[32px] h-[32px]'></HomeIcon>
				</li>
				<li>
					<TasksIcon className='w-[32px] h-[32px]'></TasksIcon>
				</li>
				<li>
					<ProfileIcon className=' w-[32px] h-[32px] text-champagne-white'></ProfileIcon>
				</li>
				<li>
					<NotificationIcon className='w-[32px] h-[32px]'></NotificationIcon>
				</li>
			</ul>
		</nav>
	);
};
