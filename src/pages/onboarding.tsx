import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';
import { useState } from 'react';

import { MainLayout } from '@/UI/4-layouts/MainLayout';
import { OnboardingSlideOne } from '@/UI/3-organisms/onboarding/slides/OnboardingSlideOne';
import { OnboardingSlideTwo } from '@/UI/3-organisms/onboarding/slides/OnboardingSlideTwo';
import { OnboardingSlideThree } from '@/UI/3-organisms/onboarding/slides/OnboardingSlideThree';
import { OnboardingSlideFour } from '@/UI/3-organisms/onboarding/slides/OnboardingSlideFour';
import SliderDots from '@/UI/2-molecules/Slider/SliderDots';

import 'swiper/css';

const OnboardingPage = () => {
	const swiperSlide = useSwiperSlide();
	const swiper = useSwiper();
	const { t } = useTranslation();

	const [indexActiveSlide, setIndexActiveSlide] = useState<string>('1');

	const sliderDotsOptions = ['1', '2', '3', '4'];

	const onClickContinueSlide = () => {};

	const renderSlide = (slideIndex: string) => {
		if (slideIndex === '1') {
			return (
				<OnboardingSlideOne onClickContinue={onClickContinueSlide} />
			);
		}
		if (slideIndex === '2') {
			return (
				<OnboardingSlideTwo onClickContinue={onClickContinueSlide} />
			);
		}
		if (slideIndex === '3') {
			return (
				<OnboardingSlideThree onClickContinue={onClickContinueSlide} />
			);
		}
		if (slideIndex === '4') {
			return (
				<OnboardingSlideFour onClickContinue={onClickContinueSlide} />
			);
		}
		return <></>;
	};

	return (
		<MainLayout>
			<div className='relative h-full w-full overflow-hidden'>
				<Swiper
					spaceBetween={30}
					slidesPerView={1}
					pagination={{ clickable: true }}
					className='h-[85%] mb-[5%]'
				>
					{sliderDotsOptions.map((singleDot) => (
						<SwiperSlide key={singleDot}>
							{({ isActive }) => {
								if (isActive) {
									setIndexActiveSlide(singleDot);
								}
								return renderSlide(singleDot);
							}}
						</SwiperSlide>
					))}
				</Swiper>
				<SliderDots
					dotOptions={sliderDotsOptions}
					activeOption={indexActiveSlide}
					containerStyles='w-full flex justify-center items-center h-[10%]'
				/>
			</div>
		</MainLayout>
	);
};

export default OnboardingPage;
