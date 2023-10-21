import Image from 'next/image';
import coffeeDesktopImage from '@/images/coffee-desktop.png';
import { Title } from '@/UI/1-atoms/Text/Title';

import type { ReactNode } from 'react';

type TypeOnboardingSlideProps = {
	title: string;
	content: ReactNode;
};

const OnboardingSlide = ({ title, content }: TypeOnboardingSlideProps) => {
	return (
		<div>
			<div className='w-fit h-fit relative'>
				<div className='w-full h-full absolute top-0 left-0 bg-black opacity-60' />
				<Image
					src={coffeeDesktopImage}
					alt='coffee on desktop'
				/>
				<div className='absolute top-0 bottom-0 left-0 right-0 m-auto w-full h-fit flex justify-between items-center'>
					<div className='h-[1px] w-[15%] bg-champagne-white' />
					<Title className='!text-champagne-white'>{title}</Title>
					<div className='h-[1px] w-[15%] bg-champagne-white' />
				</div>
			</div>
			{content}
		</div>
	);
};

export { OnboardingSlide };
