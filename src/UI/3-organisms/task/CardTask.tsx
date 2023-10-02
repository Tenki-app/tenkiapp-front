import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';

import { Text } from '@/UI/1-atoms/Text/Text';
import PendingIcon from '@/svg/task/pendingStateIcon.svg';
import DoneIcon from '@/svg/task/finishStateIcon.svg';
import ArrowIcon from '@/svg/task/downArrowIcon.svg';
import InProgressIcon from '@/svg/task/inProgressIcon.svg';
import DeleteIcon from '@/svg/task/deleteIcon.svg';
import EditIcon from '@/svg/task/editIcon.svg';

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

	const variantsArrow = {
		open: { rotate: '180deg' },
		close: { rotate: '0' },
	};

	return (
		<motion.div
			className={`shadow-lg bg-champagne-white relative px-4 py-4 rounded-md ${
				cardTaskStyles ?? ''
			}
            ${!isActive && 'cursor-pointer'}`}
			onClick={handleShowDetails}
		>
			<div className='flex justify-between'>
				<div className='flex items-start gap-4 md:gap-6'>
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
			</div>
			<motion.div
				animate={isActive ? 'open' : 'close'}
				variants={variantsArrow}
				onClick={handleHideDetails}
				className={`cursor-pointer right-4 h-fit absolute ${
					isActive ? ' bottom-4' : 'top-0 bottom-0 my-auto'
				}`}
			>
				<ArrowIcon className='text-dark-blue' />
			</motion.div>
			<AnimatePresence>
				{isActive && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'fit-content' }}
						exit={{ opacity: 0, height: 0 }}
						className='px-1 overflow-hidden'
					>
						<Text className='pb-6'>{description}</Text>
						<div className='flex justify-between items-center border-t pt-4'>
							<div className='flex justify-start gap-1'>
								<DeleteIcon className='w-[24px] h-[24px] text-red-200' />
								<EditIcon className='' />
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export { CardTask };
