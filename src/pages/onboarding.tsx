import { useTranslation } from 'react-i18next';

import { MainLayout } from '@/UI/4-layouts/MainLayout';
import { OnboardingSlideOne } from '@/UI/3-organisms/onboarding/slides/OnboardingSlideOne';

const OnboardingPage = () => {
	const { t } = useTranslation();

	const onClickContinueSlideOne = () => {};

	return (
		<MainLayout>
			<OnboardingSlideOne onClickContinue={onClickContinueSlideOne} />
		</MainLayout>
	);
};

export default OnboardingPage;
