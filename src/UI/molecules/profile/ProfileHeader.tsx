import Image from 'next/image';

import { useTranslation } from 'react-i18next';

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
	const { t } = useTranslation();

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
				{numberPendingTasks && (
					<div className='flex items-center'>
						<Text className='text-[14px]'>{`${t(
							'pendingTasks'
						)}: `}</Text>
						<Text className='text-[13px] w-[17px] flex justify-center items-center dark:bg-champagne-white bg-dark-blue rounded-full ml-2 text-champagne-white dark:text-dark-blue'>
							{numberPendingTasks}
						</Text>
					</div>
				)}
			</div>
		</div>
	);
};
