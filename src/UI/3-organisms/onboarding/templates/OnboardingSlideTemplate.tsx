import { useTranslation } from 'react-i18next';

import { Button } from '@/UI/1-atoms/Button/Button';

import type { ReactNode } from 'react';

type TypeOnboardingSlideProps = {
	content: ReactNode;
	onClickContinue: () => void;
};

const OnboardingSlideTemplate = ({
	content,
	onClickContinue,
}: TypeOnboardingSlideProps) => {
	const { t } = useTranslation();

	return (
		<div className='px-[10%] mx-auto pt-12 pb-12 overflow-y-auto h-full w-full md:max-w-[590px] md:w-auto md:px-0'>
			{content}
			<div className='flex justify-end mt-12'>
				<Button
					variant='bordered'
					onClick={onClickContinue}
				>
					{t('continue')}
				</Button>
			</div>
		</div>
	);
};

export { OnboardingSlideTemplate };
