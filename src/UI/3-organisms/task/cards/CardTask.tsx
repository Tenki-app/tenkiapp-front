import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';

import { Text } from '@/UI/1-atoms/Text/Text';
import PendingIcon from '@/svg/task/pendingStateIcon.svg';
import DoneIcon from '@/svg/task/finishStateIcon.svg';
import ArrowIcon from '@/svg/task/downArrowIcon.svg';
import InProgressIcon from '@/svg/task/inProgressIcon.svg';
import DeleteIcon from '@/svg/task/deleteIcon.svg';
import EditIcon from '@/svg/task/editIcon.svg';

import type { TypeTaskCategory, TypeTaskState } from '@/lib/types/tasks';

type TypeCardTaskProps = {
	title: string;
	description: string;
	time: string;
	date: string;
	state: TypeTaskState;
	category: TypeTaskCategory;
	cardTaskStyles?: string;
	isOpen?: boolean;
	designVariation?: 'white' | 'red' | 'blue';
};

const CardTask = ({
	title,
	description,
	time,
	date,
	state,
	category,
	cardTaskStyles,
	isOpen = false,
	designVariation,
}: TypeCardTaskProps) => {
	const [isActive, setIsActive] = useState(isOpen);

	const bottomIconsStyles = 'w-[18px] h-[18px] text-dark-blue cursor-pointer';

	const renderStatus = () => {
		const iconStyles = 'w-[25px] mt-[2px] h-[25px] md:w-[32px] md:h-[32px]';
		if (state === 'done') {
			return <DoneIcon className={`${iconStyles}`} />;
		}
		if (state === 'pending') {
			return <PendingIcon className={`${iconStyles}`} />;
		}
		if (state === 'progress') {
			return <InProgressIcon className={`${iconStyles}`} />;
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
			className={`shadow-lg bg-champagne-white relative px-4 py-5 rounded-md ${
				cardTaskStyles ?? ''
			} ${!isActive && 'cursor-pointer'}`}
			onClick={() => {
				handleShowDetails();
			}}
		>
			<div className='flex justify-between'>
				<div className='flex items-start gap-4 md:gap-6'>
					{renderStatus()}
					<div>
						<Text className='font-bold !text-lg italic'>
							{title}
						</Text>
						<AnimatePresence>
							{isActive && (
								<motion.div
									initial={{ opacity: 0, height: 0 }}
									animate={{
										opacity: 1,
										height: 'fit-content',
									}}
									exit={{ opacity: 0, height: 0 }}
								>
									<Text className='!text-xs font-light'>{`${date} | ${time}`}</Text>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
			<Text
				className={`uppercase absolute !font-bold !text-xs top-2 ${
					category === 'next' ? 'right-4' : 'right-3'
				}`}
			>
				{category}
			</Text>
			<motion.div
				animate={isActive ? 'open' : 'close'}
				variants={variantsArrow}
				onClick={handleHideDetails}
				transition={{ duration: 0.4 }}
				className={`cursor-pointer right-5 h-fit absolute ${
					isActive ? ' bottom-[20px]' : 'bottom-[25%] my-auto'
				}`}
			>
				<ArrowIcon className='text-dark-blue w-[24px] h-[12px]' />
			</motion.div>
			<AnimatePresence>
				{isActive && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'fit-content' }}
						exit={{ opacity: 0, height: 0 }}
						className='px-1'
					>
						<Text className='pt-4 pb-8'>{description}</Text>
						<div className='flex justify-start gap-5 pt-[14px] items-center border-t '>
							<EditIcon className={bottomIconsStyles} />
							<DeleteIcon className={bottomIconsStyles} />
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export { CardTask };
