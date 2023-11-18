import Image from 'next/image';

import { Title } from '@/UI/1-atoms/Text/Title';

import type { ReactNode } from 'react';
import type { StaticImageData } from 'next/image';
import TitleWithLines from '@/UI/1-atoms/Text/TitleWithLines';

type TypeOnboardingSlideProps = {
	title: string;
	content: ReactNode;
	imageUrl: StaticImageData;
	imageAlt: string;
	containerStyles?: string;
};

const OnboardingSlideTemplate = ({
	title,
	content,
	imageUrl,
	imageAlt,
	containerStyles,
}: TypeOnboardingSlideProps) => {
	return (
		<div
			className={`h-full flex flex-col items-start justify-between w-full md:flex-row ${
				containerStyles ?? ''
			}`}
		>
			{/* <div className='w-full h-[45%] relative md:h-full md:w-[50%]'>
				<div className='w-full h-full absolute top-0 left-0 bg-black opacity-60' />
				<Image
					src={imageUrl}
					alt={imageAlt}
					className='h-full object-cover'
				/>
				<div className='absolute top-0 bottom-0 left-0 right-0 m-auto w-full md:hidden h-fit'>
					<TitleWithLines
						title={title}
						colorVariation='white'
						designVariation='center'
					/>
				</div>
			</div> */}
			<div className='w-full px-[10%]  mx-auto mt-12 overflow-y-auto md:h-[65%] md:w-[50%] md:relative md:mx-0 md:px-12'>
				<div className='m-auto hidden h-fit absolute left-0 z-20 md:block md:w-[80%]'>
					<TitleWithLines
						title={title}
						colorVariation='dark-blue'
						designVariation='left'
					/>
				</div>
				<div className='md:mt-[20vh] md:max-w-[600px] md:mx-auto'>
					{content}
				</div>
			</div>
		</div>
	);
};

export { OnboardingSlideTemplate };
