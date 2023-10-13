import { Button } from '@/UI/1-atoms/Button/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Pill = () => {
	const { t, i18n } = useTranslation();
	return (
		<div>
			<Button className='text-xs px-1 xxs:text-sm xxs:px-3 py-1 w-[] rounded-l-[50px] bg-dark-blue'>
				{t('loginPill')}
			</Button>
			<Button className='text-xs px-1 xxs:text-sm xxs:px-3 py-1 rounded-r-[50px] bg-bluish-gray'>
				{t('registerPill')}
			</Button>
		</div>
	);
};
