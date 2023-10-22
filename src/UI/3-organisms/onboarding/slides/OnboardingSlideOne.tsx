import { useTranslation } from 'react-i18next';

import { OnboardingSlideTemplate } from '@/UI/3-organisms/onboarding/OnboardingSlideTemplate';
import { Text } from '@/UI/1-atoms/Text/Text';
import { Button } from '@/UI/1-atoms/Button/Button';
import coffeeDesktopImage from '@/images/coffee-desktop.png';

type TypeOnboardingSlideOneProps = {
	onClickContinue: () => void;
};

const OnboardingSlideOne = ({
	onClickContinue,
}: TypeOnboardingSlideOneProps) => {
	const { t } = useTranslation();

	return (
		<OnboardingSlideTemplate
			title={t('whatIsTenki')}
			content={
				<div className='h-full'>
					<Text>{t('tenkiObjective')}</Text>
					<div className='flex justify-end mt-12'>
						<Button
							variant='ghost'
							onClick={onClickContinue}
						>
							{t('continue')}
						</Button>
					</div>
				</div>
			}
			imageUrl={coffeeDesktopImage}
			imageAlt='coffee on desktop'
			containerStyles=''
		/>
	);
};

export { OnboardingSlideOne };
