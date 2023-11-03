import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MainLayout } from '@/UI/4-layouts/MainLayout';
import { OnboardingSlideOne } from '@/UI/3-organisms/onboarding/slides/OnboardingSlideOne';
import { OnboardingSlideTwo } from '@/UI/3-organisms/onboarding/slides/OnboardingSlideTwo';

import 'swiper/css';

const OnboardingPage = () => {
	const { t } = useTranslation();

	const onClickContinueSlideOne = () => {};

	const onClickContinueSlideTwo = () => {};

	return (
		<MainLayout>
			<div className='relative bg-red-400 h-full w-full overflow-hidden'>
				<Swiper
					spaceBetween={30}
					slidesPerView={1}
					pagination={{ clickable: true }}
				>
					<SwiperSlide>
						<OnboardingSlideOne
							onClickContinue={onClickContinueSlideOne}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<OnboardingSlideTwo
							onClickContinue={onClickContinueSlideTwo}
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</MainLayout>
	);
};

export default OnboardingPage;
