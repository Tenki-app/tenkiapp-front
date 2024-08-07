import Image from 'next/image';
import { Slider } from '../../slider/Slider';
import { HomeSlide } from '../HomeSlide';

import KeyboardNotesImage from '@/images/home/keyboard-notes-image.png';
import { Text } from '@/UI/atoms/text/Text';

type TypeHomeSliderProps = {};

const HomeSlider = () => {
	const slideStyles =
		'h-full w-full flex justify-center items-center text-white text-4xl';

	const slidesArray = [
		<HomeSlide
			key={1}
			description={
				<div>
					<Text className='text-3xl'>
						Gestiona tus <span>tareas</span> de manera efectiva con
						<span>Tenki!</span>
					</Text>
				</div>
			}
		/>,
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
		<div className='h-[500px] relative'>
			<Image
				src={KeyboardNotesImage}
				alt='Keyboard notes'
				className='w-full h-full object-cover absolute top-0 left-0'
			/>
			<Slider
				slides={slidesArray}
				dotStyle='simple'
			/>
		</div>
	);
};

export default HomeSlider;
