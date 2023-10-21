import { useTranslation } from 'react-i18next';

import { OnboardingSlideTemplate } from '@/UI/3-organisms/onboarding/OnboardingSlideTemplate';
import { Text } from '@/UI/1-atoms/Text/Text';
import coffeeDesktopImage from '@/images/coffee-desktop.png';

const OnboardingSlideOne = () => {
	const { t } = useTranslation();
	return (
		<OnboardingSlideTemplate
			title={t('whatIsTenki')}
			content={
				<>
					<Text>{t('tenkiObjective')}</Text>
				</>
			}
			imageUrl={coffeeDesktopImage}
			imageAlt='coffee on desktop'
		/>
	);
};

export { OnboardingSlideOne };
