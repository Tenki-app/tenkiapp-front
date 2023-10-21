import { MainLayout } from '@/UI/4-layouts/MainLayout';
import { OnboardingSlide } from '@/UI/3-organisms/onboarding/OnboardingSlide';

const onboarding = () => {
	return (
		<MainLayout>
			<OnboardingSlide
				title='¿Qué es Tenki'
				content={<>Monda</>}
			/>
		</MainLayout>
	);
};

export default onboarding;
