import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { Text } from '@/UI/atoms/text/Text';

import ArrowIcon from '@/svg/task/downArrowIcon.svg';

import type { ReactNode } from 'react';

type TypeTitleAccordionProps = {
	title: string;
	content: ReactNode;
	isOpenInitial?: boolean;
	numberOfTasks?: number;
};

const TitleAccordion = ({
	title,
	content,
	isOpenInitial = false,
	numberOfTasks,
}: TypeTitleAccordionProps) => {
	const [showContent, setShowContent] = useState(isOpenInitial);

	const variantsArrow = {
		open: { rotate: '180deg' },
		close: { rotate: '0' },
	};

	const onClickArrowIcon = () => {
		setShowContent(!showContent);
	};

	return (
		<div className='h-fit'>
			<div className='flex justify-between border-champagne-white border-b-[1px] pb-1 mr-2 mb-6'>
				<Text className='text-champagne-white italic'>{`${title}  (${
					numberOfTasks ?? ''
				})`}</Text>
				<div>
					<motion.div
						animate={showContent ? 'open' : 'close'}
						variants={variantsArrow}
						onClick={onClickArrowIcon}
						transition={{ duration: 0.4 }}
						className={`cursor-pointer right-5 h-fit  ${
							showContent
								? ' bottom-[20px]'
								: 'bottom-[25%] my-auto'
						}`}
					>
						<ArrowIcon className='text-champagne-white w-[24px] h-[12px]' />
					</motion.div>
				</div>
			</div>
			<AnimatePresence>
				{showContent && (
					<motion.div
						className='h-full'
						transition={{ duration: 0.4 }}
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'fit-content' }}
						exit={{ opacity: 0, height: 0 }}
					>
						{content}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export { TitleAccordion };
