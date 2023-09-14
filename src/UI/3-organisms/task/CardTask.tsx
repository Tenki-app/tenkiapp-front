import { Text } from '@/UI/1-atoms/Text/Text';
import PendingIcon from '@/svg/task/pendingStateIcon.svg';
import DoneIcon from '@/svg/task/finishStateIcon.svg';
import ArrowIcon from '@/svg/task/downArrowIcon.svg';
import InProgressIcon from '@/svg/task/inProgressIcon.svg';
import DeleteIcon from '@/svg/task/deleteIcon.svg';
import EditIcon from '@/svg/task/editIcon.svg';
import { useState } from 'react';

type TypeCardTaskProps = {
	title: string;
	description: string;
	time: string;
	date: string;
	state: 'done' | 'pending' | 'progress';
	category: 'today' | 'tomorrow' | 'someday';
	cardTaskStyles?: string;
};

const CardTask = ({
	title,
	description,
	time,
	date,
	state,
	category,
	cardTaskStyles,
}: TypeCardTaskProps) => {
	const [isActive, setIsActive] = useState(false);

	const renderStatus = () => {
		const iconStyles = 'w-[25px] h-[25px] md:w-[32px] md:h-[32px]';
		if (state === 'done') {
			return <DoneIcon className={`${iconStyles}`} />;
		}
	};

	const handleShowDetails = () => {
		if (!isActive) {
			setIsActive(true);
		}
	};

	const handleHideDetails = () => {
		if (isActive) {
			setIsActive(false);
		}
	};

	return (
		<div
			className={`shadow-lg bg-champagne-white px-4 py-4 rounded-md ${
				cardTaskStyles ?? ''
			}
            ${!isActive && 'cursor-pointer'}`}
			onClick={handleShowDetails}
		>
			<div className='flex justify-between'>
				<div className='flex items-center gap-4 md:gap-6'>
					{renderStatus()}
					<div>
						<Text className='font-bold !text-base italic'>
							{title}
						</Text>
						{isActive && (
							<Text className='font-light'>{`${date} | ${time}`}</Text>
						)}
					</div>
				</div>
				<div className='flex flex-col justify-between items-end gap-2'>
					<Text className='!font-black uppercase !text-xs mt-[-8px] mr-[-4px]'>
						{category}
					</Text>
					{!isActive && <ArrowIcon className='text-dark-blue' />}
				</div>
			</div>
			{isActive && (
				<div className='mt-6 px-1'>
					<Text className='pb-6'>{description}</Text>
					<div className='flex justify-between items-center border-t pt-4'>
						<div className='flex justify-start gap-1'>
							<DeleteIcon className='w-[24px] h-[24px] text-red-200' />
							<EditIcon className='' />
						</div>
						<ArrowIcon
							className='text-dark-blue rotate-180 cursor-pointer'
							onClick={handleHideDetails}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export { CardTask };
