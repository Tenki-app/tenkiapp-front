import Image from 'next/image';

import { Text } from '@/UI/atoms/text/Text';
import ProfileIcon from '@/svg/profile/profileIcon.svg';

type TypeProfileHeaderProps = {
	profileName: string;
	profileEmail: string;
	profileImageSrc?: string;
	numberPendingTasks?: number;
};

export const ProfileHeader = ({
	profileName,
	profileEmail,
	profileImageSrc,
	numberPendingTasks,
}: TypeProfileHeaderProps) => {
	return (
		<div className='flex gap-x-6 items-center'>
			{profileImageSrc ? (
				<Image
					src={profileImageSrc}
					alt={profileName}
					width={90}
					height={90}
					className={`border-4 rounded-full dark:border-champagne-white border-dark-blue`}
				/>
			) : (
				<ProfileIcon className='w-[90px] h-[90px]' />
			)}
			<div className='flex flex-col'>
				<Text className='font-bold text-[18px]'>{profileName}</Text>
				<Text className='text-[14px]'>{profileEmail}</Text>
				<Text className='text-[14px]'>Tareas pendientes</Text>
			</div>
		</div>
	);
};
