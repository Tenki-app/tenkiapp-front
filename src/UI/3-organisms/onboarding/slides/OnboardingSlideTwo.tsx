import { useSwiper } from 'swiper/react';

import { OnboardingSlideTemplate } from '@/UI/3-organisms/onboarding/templates/OnboardingSlideTemplate';
import { CardTask } from '../../task/cards/CardTask';
import { SampleCardTask } from '../../task/cards/SampleCardTask';

const OnboardingSlideTwo = () => {
	const swiper = useSwiper();

	return (
		<OnboardingSlideTemplate
			content={
				<div className='flex flex-col gap-[40px] w-full mt-12 md:w-[80%] md:mx-auto'>
					<SampleCardTask
						title='Do dinner'
						state='done'
						category='today'
						sampleCardTaskStyles='pointer-events-none mb-10 bg-[#8f3b3396]'
					/>
					<CardTask
						title='Do dinner'
						description='sdl sdfklj sdfjll sdklfj sdlfjskdf sdlfjskdf sdlfjskdfsdlfjskdf sdlfjskdf sdlfjskdf sdlfjskdf sdlfjskdf sdlfjskdf'
						time='15:00'
						date='13-01-2023'
						state='done'
						category='today'
						isOpen
						cardTaskStyles='pointer-events-none bg-[#8f3b3396]'
					/>
				</div>
			}
			onClickContinue={() => {
				swiper.slideNext();
			}}
			onClickBack={() => {
				swiper.slidePrev();
			}}
		/>
	);
};

export { OnboardingSlideTwo };
