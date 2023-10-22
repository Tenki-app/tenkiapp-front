import { useTranslation } from 'react-i18next';

import { MainLayout } from '@/UI/4-layouts/MainLayout';
import { OnboardingSlideOne } from '@/UI/3-organisms/onboarding/slides/OnboardingSlideOne';
import { OnboardingSlideTwo } from '@/UI/3-organisms/onboarding/slides/OnboardingSlideTwo';

const OnboardingPage = () => {
	const { t } = useTranslation();

	const onClickContinueSlideOne = () => {};

	const onClickContinueSlideTwo = () => {};

	return (
		<MainLayout>
			{/* <OnboardingSlideOne onClickContinue={onClickContinueSlideOne} /> */}
			<OnboardingSlideTwo onClickContinue={onClickContinueSlideTwo} />
		</MainLayout>
	);
};

export default OnboardingPage;
