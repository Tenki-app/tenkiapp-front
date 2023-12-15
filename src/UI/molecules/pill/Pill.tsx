import { Button } from '@/UI/atoms/button/Button';

import React, { ReactNode } from 'react';

type typePillProps = {
	contentPill1: ReactNode;
	contentPill2: ReactNode;
};
export const Pill = ({ contentPill1, contentPill2 }: typePillProps) => {
	return (
		<div>
			<Button className='text-xs px-1 xxs:text-sm xxs:px-3 py-1 w-[] rounded-l-[50px] bg-dark-blue'>
				{contentPill1}
			</Button>
			<Button className='text-xs px-1 xxs:text-sm xxs:px-3 py-1 rounded-r-[50px] bg-bluish-gray'>
				{contentPill2}
			</Button>
		</div>
	);
};
