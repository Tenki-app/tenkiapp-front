import { useTranslation } from 'react-i18next';

import { OnboardingSlideTemplate } from '@/UI/3-organisms/onboarding/templates/OnboardingSlideTemplate';
import { Button } from '@/UI/1-atoms/Button/Button';
import calendarImage from '@/images/onboarding/calendar.png';

type TypeOnboardingSlideTwoProps = {
	onClickContinue: () => void;
};

const OnboardingSlideThree = ({
	onClickContinue,
}: TypeOnboardingSlideTwoProps) => {
	const { t } = useTranslation();

	return (
		<OnboardingSlideTemplate
			title={t('ourTaskSystem')}
			content={
				<div className=''>
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry
					standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a
					type specimen book. It has survived not only five centuries,
					but also the leap into electronic typesetting, remaining
					essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum
					passages, and more recently with desktop publishing software
					like Aldus PageMaker including versions of Lorem Ipsum.
					<div className='flex justify-end mt-12'>
						<Button
							variant='bordered'
							onClick={onClickContinue}
						>
							{t('continue')}
						</Button>
					</div>
				</div>
			}
			imageUrl={calendarImage}
			imageAlt='coffee on desktop'
			containerStyles=''
		/>
	);
};

export { OnboardingSlideThree };
