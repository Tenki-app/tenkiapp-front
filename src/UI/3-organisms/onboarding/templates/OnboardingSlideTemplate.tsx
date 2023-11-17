import Image from 'next/image';

import { Title } from '@/UI/1-atoms/Text/Title';

import type { ReactNode } from 'react';
import type { StaticImageData } from 'next/image';

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
			className={`h-full flex flex-col items-start justify-between w-full ${
				containerStyles ?? ''
			}`}
		>
			<div className='w-full h-[45%] relative'>
				<div className='w-full h-full absolute top-0 left-0 bg-black opacity-60' />
				<Image
					src={imageUrl}
					alt={imageAlt}
					className='h-full'
				/>
				<div className='absolute top-0 bottom-0 left-0 right-0 m-auto gap-8 w-full h-fit flex justify-between items-center'>
					<div className='h-[1px] w-[10%] bg-champagne-white' />
					<Title className='!text-champagne-white'>{title}</Title>
					<div className='h-[1px] w-[10%] bg-champagne-white' />
				</div>
			</div>
			<div className='w-full px-[10%] h-[53%] mx-auto mt-12 overflow-y-auto'>
				{content}
			</div>
		</div>
	);
};

export { OnboardingSlideTemplate };
