import { useTranslation } from 'react-i18next';

import { Title } from '@/UI/1-atoms/Text/Title';
import TitleWithLines from '@/UI/1-atoms/Text/TitleWithLines';
import { Button } from '@/UI/1-atoms/Button/Button';

import type { ReactNode } from 'react';

type TypeOnboardingSlideProps = {
	title: string;
	content: ReactNode;
	onClickContinue: () => void;
};

const OnboardingSlideTemplate = ({
	title,
	content,
	onClickContinue,
}: TypeOnboardingSlideProps) => {
	const { t } = useTranslation();

	return (
		<div className='px-[10%] mx-auto pt-12 pb-12 overflow-y-auto h-full w-full'>
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
