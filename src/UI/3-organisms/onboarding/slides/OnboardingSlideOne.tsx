import { useTranslation } from 'react-i18next';

import { OnboardingSlideTemplate } from '@/UI/3-organisms/onboarding/templates/OnboardingSlideTemplate';
import { Text } from '@/UI/1-atoms/Text/Text';

type TypeOnboardingSlideOneProps = {
	onClickContinue: () => void;
};

const OnboardingSlideOne = ({
	onClickContinue,
}: TypeOnboardingSlideOneProps) => {
	const { t } = useTranslation();

	return (
		<OnboardingSlideTemplate
			onClickContinue={onClickContinue}
			content={
				<div className='w-full'>
					<Text>{t('tenkiObjective')}</Text>
				</div>
			}
		/>
	);
};

export { OnboardingSlideOne };
