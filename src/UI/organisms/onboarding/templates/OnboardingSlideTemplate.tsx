import { useTranslation } from 'react-i18next';

import { Button } from '@/UI/atoms/button/Button';
import ArrowIcon from '@/svg/general/arrow.svg';

import type { ReactNode } from 'react';

type TypeOnboardingSlideProps = {
	content: ReactNode;
	onClickContinue: () => void;
	onClickBack?: () => void;
	continueButtonText?: string;
	backButtonText?: string;
};

const OnboardingSlideTemplate = ({
	content,
	onClickContinue,
	onClickBack,
	continueButtonText,
	backButtonText,
}: TypeOnboardingSlideProps) => {
	const { t } = useTranslation();

	const arrowButtonStyles =
		'rounded-full aspect-square flex justify-center items-center w-[40px]';

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
						variant={`${backButtonText ? 'bordered' : 'custom'}`}
						className={`${backButtonText ? '' : arrowButtonStyles}`}
						onClick={onClickBack}
					>
						{backButtonText ? t(backButtonText) : <ArrowIcon />}
					</Button>
				)}
				<Button
					variant={`${continueButtonText ? 'bordered' : 'custom'}`}
					className={`${continueButtonText ? '' : arrowButtonStyles}`}
					onClick={onClickContinue}
				>
					{continueButtonText ? (
						t(continueButtonText)
					) : (
						<ArrowIcon className='rotate-180' />
					)}
				</Button>
			</div>
		</div>
	);
};

export { OnboardingSlideTemplate };
