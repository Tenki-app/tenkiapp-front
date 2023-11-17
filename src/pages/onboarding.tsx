import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';
import { useState } from 'react';

import { MainLayout } from '@/UI/4-layouts/MainLayout';
import { OnboardingSlideOne } from '@/UI/3-organisms/onboarding/slides/OnboardingSlideOne';
import { OnboardingSlideTwo } from '@/UI/3-organisms/onboarding/slides/OnboardingSlideTwo';

import 'swiper/css';
import SliderDots from '@/UI/2-molecules/Slider/SliderDots';

const OnboardingPage = () => {
	const swiperSlide = useSwiperSlide();
	const swiper = useSwiper();
	const { t } = useTranslation();

	const [indexActiveSlide, setIndexActiveSlide] = useState<string>('1');

	const sliderDotsOptions = ['1', '2', '3', '4'];

	const onClickContinueSlideOne = () => {};

	const onClickContinueSlideTwo = () => {};

	return (
		<MainLayout>
			<div className='relative h-full w-full overflow-hidden'>
				<Swiper
					spaceBetween={30}
					slidesPerView={1}
					pagination={{ clickable: true }}
					className='h-[85%]'
				>
					<SwiperSlide>
						{({ isActive }) => {
							if (isActive) {
								setIndexActiveSlide('1');
							}
							return (
								<OnboardingSlideOne
									onClickContinue={onClickContinueSlideOne}
								/>
							);
						}}
					</SwiperSlide>
					<SwiperSlide>
						{({ isActive }) => {
							if (isActive) {
								setIndexActiveSlide('2');
							}
							return (
								<OnboardingSlideTwo
									onClickContinue={onClickContinueSlideTwo}
								/>
							);
						}}
					</SwiperSlide>
				</Swiper>
				<SliderDots
					dotOptions={sliderDotsOptions}
					activeOption={indexActiveSlide}
					containerStyles='w-full flex justify-center h-[10%]'
				/>
			</div>
		</MainLayout>
	);
};

export default OnboardingPage;
