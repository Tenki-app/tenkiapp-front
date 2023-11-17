import { useTranslation } from 'react-i18next';

import { OnboardingSlideTemplate } from '@/UI/3-organisms/onboarding/templates/OnboardingSlideTemplate';
import { Button } from '@/UI/1-atoms/Button/Button';
import { CardTask } from '../../task/cards/CardTask';
import { SampleCardTask } from '../../task/cards/SampleCardTask';
import checkListImage from '@/images/onboarding/check-list.png';

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
				<div className='h-full mt-20 w-full'>
					<div className='flex flex-col gap-[40px] w-full'>
						<SampleCardTask
							title='Do dinner'
							state='done'
							category='today'
							sampleCardTaskStyles='pointer-events-none mb-10 bg-[#8f3b3396]'
						/>
						<CardTask
							title='Do dinner'
							description='sdl sdfklj sdfjll sdklfj sdlfjskdf sdlfjskdf sdlfjskdfsdlfjskdf sdlfjskdf sdlfjskdf sdlfjskdf sdlfjskdf sdlfjskdf'
							time='15:00'
							date='13-01-2023'
							state='done'
							category='today'
							isOpen
							cardTaskStyles='pointer-events-none bg-[#8f3b3396]'
						/>
					</div>
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
			imageUrl={checkListImage}
			imageAlt='coffee on desktop'
			containerStyles=''
		/>
	);
};

export { OnboardingSlideTwo };
