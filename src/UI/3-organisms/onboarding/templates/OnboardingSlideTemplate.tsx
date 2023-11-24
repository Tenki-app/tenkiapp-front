import { useTranslation } from 'react-i18next';

import { Button } from '@/UI/1-atoms/Button/Button';

import type { ReactNode } from 'react';

type TypeOnboardingSlideProps = {
	content: ReactNode;
	onClickContinue: () => void;
	onClickBack?: () => void;
	continueButtonText?: string;
};

const OnboardingSlideTemplate = ({
	content,
	onClickContinue,
	onClickBack,
	continueButtonText = 'continue',
}: TypeOnboardingSlideProps) => {
	const { t } = useTranslation();

	const showBackButton = !!onClickBack;

	return (
		<div className='px-[10%] pt-12 pb-12 overflow-y-auto h-full w-full'>
			{content}
			<div
				className={`flex w-full mt-12 ${
					showBackButton ? 'justify-between' : 'justify-end'
				}`}
			>
				{showBackButton && (
					<Button
						variant='bordered'
						onClick={onClickBack}
					>
						{t('back')}
					</Button>
				)}
				<Button
					variant='bordered'
					onClick={onClickContinue}
				>
					{t(continueButtonText)}
				</Button>
			</div>
		</div>
	);
};

export { OnboardingSlideTemplate };
