import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { Text } from '@/UI/1-atoms/Text/Text';
import PendingIcon from '@/svg/task/pendingStateIcon.svg';
import DoneIcon from '@/svg/task/finishStateIcon.svg';
import ArrowIcon from '@/svg/task/downArrowIcon.svg';
import InProgressIcon from '@/svg/task/inProgressIcon.svg';
import DashedArrowIcon from '@/svg/task/dashedArrowIcon.svg';
import BentDashedArrowIcon from '@/svg/task/bentDashedArrowIcon.svg';

type TypeSampleCardTaskProps = {
	title: string;
	description: string;
	time: string;
	date: string;
	state: 'done' | 'pending' | 'progress';
	category: 'today' | 'next' | 'someday';
	sampleCardTaskStyles?: string;
	isOpen?: boolean;
	designVariation?: 'white' | 'red' | 'blue';
};

const SampleCardTask = ({
	title,
	description,
	time,
	date,
	state,
	category,
	sampleCardTaskStyles,
	designVariation,
}: TypeSampleCardTaskProps) => {
	const { t } = useTranslation();

	let designCard = '';

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

	const bottomIconsStyles = 'w-[18px] h-[18px] text-dark-blue cursor-pointer';

	return (
		<motion.div
			className={`shadow-lg bg-champagne-white relative px-4 py-5 rounded-md ${
				sampleCardTaskStyles ?? ''
			}`}
		>
			<div className='flex justify-between'>
				<div className='flex items-start gap-4 md:gap-6'>
					<div className='relative w-fit h-fit'>
						<div className='flex flex-col items-center absolute left-[-4px] w-fit bottom-[25px] h-fit'>
							<Text className='!text-xs whitespace-nowrap font-bold mb-[2px]'>
								{t('state')}
							</Text>
							<DashedArrowIcon className='w-4 h-[50px]' />
						</div>
						{renderStatus()}
					</div>
					<div className='relative w-fit h-fit'>
						<Text className='font-bold !text-lg italic'>
							{title}
						</Text>
						<div className='flex flex-col items-center absolute left-[-20px] w-fit top-[23px] h-fit'>
							<DashedArrowIcon className='w-4 h-[50px] rotate-180' />
							<Text className='!text-xs whitespace-nowrap font-bold mt-[2px]'>
								{t('taskTitle')}
							</Text>
						</div>
					</div>
				</div>
			</div>
			<div
				className={`absolute top-2 ${
					category === 'next' ? 'right-4' : 'right-3'
				}`}
			>
				<Text className={`uppercase !font-bold !text-xs`}>
					{category}
				</Text>
				<div className='flex flex-col items-center absolute left-[-15px] w-fit bottom-[16px] h-fit'>
					<Text className='!text-xs whitespace-nowrap font-bold mb-[2px]'>
						{t('assignedDay')}
					</Text>
					<DashedArrowIcon className='w-4 h-[50px]' />
				</div>
			</div>
			<div
				className={`cursor-pointer right-5 h-fit absolute bottom-[25%] my-auto`}
			>
				<ArrowIcon className='text-dark-blue w-[24px] h-[12px]' />
				<div className='flex flex-col items-center right-[-7px] absolute w-fit h-fit'>
					<BentDashedArrowIcon className='w-[30px] h-[40px]' />
					<Text className='!text-xs whitespace-nowrap font-bold mb-[2px]'>
						{t('moreInfo')}
					</Text>
				</div>
			</div>
		</motion.div>
	);
};

export { SampleCardTask };
