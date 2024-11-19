import { ThreeBody } from '@uiball/loaders';

const Loader = () => {
	return (
		<div className='flex items-center justify-center w-[100%] h-[100vh] bg-dark-blue z-[100] relative'>
			<ThreeBody
				size={60}
				speed={1}
				color='#F7EFD8'
			/>
		</div>
	);
};

export { Loader };
