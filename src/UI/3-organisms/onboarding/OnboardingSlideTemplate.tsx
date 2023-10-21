import Image from 'next/image';

import { Title } from '@/UI/1-atoms/Text/Title';

import type { ReactNode } from 'react';
import type { StaticImageData } from 'next/image';

type TypeOnboardingSlideProps = {
	title: string;
	content: ReactNode;
	imageUrl: StaticImageData;
	imageAlt: string;
};

const OnboardingSlideTemplate = ({
	title,
	content,
	imageUrl,
	imageAlt,
}: TypeOnboardingSlideProps) => {
	return (
		<div>
			<div className='w-fit h-fit relative'>
				<div className='w-full h-full absolute top-0 left-0 bg-black opacity-60' />
				<Image
					src={imageUrl}
					alt={imageAlt}
				/>
				<div className='absolute top-0 bottom-0 left-0 right-0 m-auto w-full h-fit flex justify-between items-center'>
					<div className='h-[1px] w-[15%] bg-champagne-white' />
					<Title className='!text-champagne-white'>{title}</Title>
					<div className='h-[1px] w-[15%] bg-champagne-white' />
				</div>
			</div>
			<div className='w-[80%] mx-auto mt-12'>{content}</div>
		</div>
	);
};

export { OnboardingSlideTemplate };
