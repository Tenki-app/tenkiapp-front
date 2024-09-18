import TenkiLogo from '@/svg/theme/tenkiLogo.svg';

import type { ReactNode } from 'react';

type TypeHomeSlideProps = {
	description: ReactNode;
};

const HomeSlide = ({ description }: TypeHomeSlideProps) => {
	return (
		<div className='flex flex-col items-center h-full mt-4 w-full text-white text-4xl'>
			<TenkiLogo className='w-[140px] h-[180px]' />
			{description}
		</div>
	);
};

export { HomeSlide };
