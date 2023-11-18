import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';
import { useState } from 'react';

import { onboardingImagesData } from '@/lib/data/onboarding';

import { MainLayout } from '@/UI/4-layouts/MainLayout';
import { OnboardingSlideOne } from '@/UI/3-organisms/onboarding/slides/OnboardingSlideOne';
import { OnboardingSlideTwo } from '@/UI/3-organisms/onboarding/slides/OnboardingSlideTwo';
import { OnboardingSlideThree } from '@/UI/3-organisms/onboarding/slides/OnboardingSlideThree';
import { OnboardingSlideFour } from '@/UI/3-organisms/onboarding/slides/OnboardingSlideFour';
import SliderDots from '@/UI/2-molecules/Slider/SliderDots';
import TitleWithLines from '@/UI/1-atoms/Text/TitleWithLines';
import Image from 'next/image';
import 'swiper/css';

const OnboardingPage = () => {
	const swiperSlide = useSwiperSlide();
	const swiper = useSwiper();
	const { t } = useTranslation();

	const [indexActiveSlide, setIndexActiveSlide] = useState<string>('1');

	const sliderDotsOptions = ['1', '2', '3', '4'];
	const indexActiveNumber = Number(indexActiveSlide) - 1;

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
			<div className='relative h-full w-full overflow-hidden md:flex'>
				<div className='w-full h-[40%] relative md:h-full md:w-[50%]'>
					<div className='w-full h-full absolute top-0 left-0 bg-black opacity-60' />
					<Image
						src={onboardingImagesData[indexActiveNumber].imageSrc}
						alt={onboardingImagesData[indexActiveNumber].imageAlt}
						className='h-full object-cover'
					/>
					<div className='absolute top-0 bottom-0 left-0 right-0 m-auto w-full md:hidden h-fit'>
						<TitleWithLines
							title={t(
								onboardingImagesData[indexActiveNumber].title
							)}
							colorVariation='white'
							designVariation='center'
						/>
					</div>
				</div>
				<div className='h-[55%] w-full flex flex-col justify-between md:h-full md:w-[50%] md:gap-4'>
					<div className='hidden w-full mt-12 md:block'>
						<TitleWithLines
							title={t(
								onboardingImagesData[indexActiveNumber].title
							)}
							colorVariation='dark-blue'
							designVariation='left'
						/>
					</div>
					<Swiper
						spaceBetween={0}
						slidesPerView={1}
						pagination={{ clickable: true }}
						className='h-[82%] w-full md:mb-0 md:h-[70%]'
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
						containerStyles='w-full flex justify-center items-center md:py-8'
					/>
				</div>
			</div>
		</MainLayout>
	);
};

export default OnboardingPage;
