import { useTranslation } from 'react-i18next';

import { OnboardingSlideTemplate } from '@/UI/3-organisms/onboarding/OnboardingSlideTemplate';
import { Text } from '@/UI/1-atoms/Text/Text';
import { Button } from '@/UI/1-atoms/Button/Button';
import { CardTask } from '../../task/cards/CardTask';
import coffeeDesktopImage from '@/images/coffee-desktop.png';

type TypeOnboardingSlideTwoProps = {
	onClickContinue: () => void;
};

const OnboardingSlideTwo = ({
	onClickContinue,
}: TypeOnboardingSlideTwoProps) => {
	const { t } = useTranslation();

	return (
		<OnboardingSlideTemplate
			title={t('ourTaskSystem')}
			content={
				<div className='h-full'>
					<div className='flex flex-col gap-6'>
						<CardTask
							title='Do dinner'
							description='sdl sdfklj sdfjll sdklfj sdlfjskdf sdlfjskdf sdlfjskdfsdlfjskdf sdlfjskdf sdlfjskdf sdlfjskdf sdlfjskdf sdlfjskdf'
							time='15:00'
							date='13-01-2023'
							state='done'
							category='today'
							cardTaskStyles='pointer-events-none'
						/>
						<CardTask
							title='Do dinner'
							description='sdl sdfklj sdfjll sdklfj sdlfjskdf sdlfjskdf sdlfjskdfsdlfjskdf sdlfjskdf sdlfjskdf sdlfjskdf sdlfjskdf sdlfjskdf'
							time='15:00'
							date='13-01-2023'
							state='done'
							category='today'
							isOpen
							cardTaskStyles='pointer-events-none'
						/>
					</div>
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

export { OnboardingSlideTwo };
