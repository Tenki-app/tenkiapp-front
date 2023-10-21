import Image from 'next/image';
import coffeeDesktopImage from '@/images/coffee-desktop.png';

const OnboardingSlideOne = () => {
	return (
		<div>
			<Image
				src={coffeeDesktopImage}
				alt='coffee on desktop'
			/>
		</div>
	);
};

export { OnboardingSlideOne };
