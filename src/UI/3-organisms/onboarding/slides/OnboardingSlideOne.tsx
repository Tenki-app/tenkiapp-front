import { useTranslation } from 'react-i18next';
import { useSwiper } from 'swiper/react';

import { OnboardingSlideTemplate } from '../templates/OnboardingSlideTemplate';
import { Text } from '@/UI/1-atoms/text/Text';

const OnboardingSlideOne = () => {
	const swiper = useSwiper();
	const { t } = useTranslation();

	return (
		<OnboardingSlideTemplate
			onClickContinue={() => {
				swiper.slideNext();
			}}
			content={
				<div className='w-full'>
					<Text>{t('tenkiObjective')}</Text>
				</div>
			}
		/>
	);
};

export { OnboardingSlideOne };
