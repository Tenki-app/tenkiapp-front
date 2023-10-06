import { Button } from '@/UI/1-atoms/Button/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Pill = () => {
	const { t, i18n } = useTranslation();
	return (
		<div>
			<Button className='px-9 py-1 rounded-l-[50px] bg-dark-blue'>
				{t('loginPill')}
			</Button>
			<Button className='px-6 py-1 rounded-r-[50px] bg-bluish-gray'>
				{t('registerPill')}
			</Button>
		</div>
	);
};
