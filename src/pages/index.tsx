import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Slider } from '@/UI/organisms/slider/Slider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

import { redirectToLoginPage } from '@/lib/helpers/redirect/redirects';

import { Loader } from '@/UI/molecules/loader/Loader';
import { MainLayout } from '@/UI/layouts/MainLayout';

const Home = () => {
	const slideStyles =
		'h-[400px] w-full !bg-bluish-gray flex justify-center items-center text-white text-4xl';

	const slidesArray = [
		<div
			key={1}
			className={slideStyles}
		>
			1
		</div>,
		<div
			key={2}
			className={slideStyles}
		>
			2
		</div>,
		<div
			key={3}
			className={slideStyles}
		>
			3
		</div>,
		<div
			key={4}
			className={slideStyles}
		>
			4
		</div>,
	];

	return (
		<MainLayout
			hasNav={true}
			className='md:pt-[90px]'
		>
			<div className='w-full'>
				<Slider
					slides={slidesArray}
					dotStyle='simple'
				/>
			</div>
		</MainLayout>
	);
};

export default withAuthenticationRequired(Home, {
	onRedirecting: () => <Loader />,
	onBeforeAuthentication: () =>
		new Promise(() => {
			redirectToLoginPage();
		}),
});
