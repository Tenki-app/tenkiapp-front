import { useTranslation } from 'react-i18next';

import { MainLayout } from '@/UI/4-layouts/MainLayout';
import { OnboardingSlideOne } from '@/UI/3-organisms/onboarding/slides/OnboardingSlideOne';

const OnboardingPage = () => {
	const { t } = useTranslation();

	return (
		<MainLayout>
			<OnboardingSlideOne />
		</MainLayout>
	);
};

export default OnboardingPage;
