import { useTranslation } from 'react-i18next';
import { useSwiper } from 'swiper/react';

import { OnboardingSlideTemplate } from '@/UI/3-organisms/onboarding/templates/OnboardingSlideTemplate';
import { Button } from '@/UI/1-atoms/Button/Button';
import clockImage from '@/images/onboarding/clock.png';

const OnboardingSlideFour = () => {
	const swiper = useSwiper();
	const { t } = useTranslation();

	return (
		<OnboardingSlideTemplate
			onClickContinue={() => {
				swiper.slideNext();
			}}
			content={
				<div className=''>
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry
					standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a
					type specimen book. It has survived not only five centuries,
					but also the leap into electronic typesetting, remaining
					<div className='w-full justify-center flex'>
						<div className='w-[50px] aspect-square bg-slate-400 rounded-full mt-8' />
					</div>
				</div>
			}
		/>
	);
};

export { OnboardingSlideFour };
