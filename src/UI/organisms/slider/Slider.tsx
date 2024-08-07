import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { useState } from 'react';

import { getArrayOfNumbers } from '@/lib/helpers/arrays/getArrayOfNumbers';

import SliderDots from '@/UI/molecules/slider/SliderDots';
import ArrowIcon from '@/svg/general/arrow.svg';
import 'swiper/css';
// import 'swiper/css/navigation';

import type { ReactNode } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Button } from '@/UI/atoms/button/Button';

type TypeHomeSlider = {
	slides: Array<ReactNode>;
	dotStyle: 'numbers' | 'simple';
	sliderStyles?: string;
	swiperStyles?: string;
	spaceBetween?: number;
	slidesPerView?: number;
	autoplay?: boolean;
	navigation?: boolean;
	pagination?: boolean;
};

const Slider = ({
	slides,
	dotStyle = 'simple',
	sliderStyles,
	spaceBetween = 0,
	slidesPerView = 1,
	autoplay = false,
	navigation = true,
	pagination = true,
}: TypeHomeSlider) => {
	const [indexActiveSlide, setIndexActiveSlide] = useState<string>('1');

	const commonArrowButtonStyles = 'absolute top-0 bottom-0 z-[100]';

	const renderDotsComponent = () => {
		if (dotStyle === 'numbers') {
			const dotsArray = getArrayOfNumbers(slides.length);

			return (
				<SliderDots
					dotOptions={dotsArray}
					activeOption={indexActiveSlide}
					containerStyles='w-full flex justify-center items-center md:py-8'
				/>
			);
		}
		if (dotStyle === 'simple') {
			return <></>;
		}
	};

	return (
		<div className='relative'>
			<Swiper
				spaceBetween={spaceBetween}
				slidesPerView={slidesPerView}
				autoplay={autoplay}
				pagination={{
					el: '.dots-container',
					clickable: true,
					bulletActiveClass: 'active-dot',
					bulletClass: 'dot',
					renderBullet: function (index, className) {
						return '<span class="' + className + '">' + '</span>';
					},
				}}
				className={`${sliderStyles} relative flex flex-row`}
				onSlideChange={(param: any) => {
					setIndexActiveSlide(String(param.activeIndex + 1));
				}}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
				modules={[Navigation, Pagination]}
			>
				{slides.map((singleSlide, index) => (
					<SwiperSlide key={index}>{singleSlide}</SwiperSlide>
				))}
				{navigation && (
					<>
						<Button
							className={`swiper-button-prev left-5 ${commonArrowButtonStyles}`}
						>
							<ArrowIcon className='text-champagne-white' />
						</Button>
						<Button
							className={`swiper-button-next right-5 ${commonArrowButtonStyles}`}
						>
							<ArrowIcon className='rotate-180 text-champagne-white' />
						</Button>
					</>
				)}
				{pagination && (
					<div className='dots-container w-full flex justify-center z-[100] absolute !bottom-[30px] gap-x-2'></div>
				)}
			</Swiper>
		</div>
	);
};

export { Slider };
