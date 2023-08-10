import React, { useState, useEffect } from 'react';
import ColFlag from '@/svg/theme/colombiaFlag.svg';
import UsaFlag from '@/svg/theme/usaFlag.svg';
import { useTranslation } from 'react-i18next';
import { Text } from '@/UI/1-atoms/Text/Text';
import { useAppStore } from '@/lib/store/store';

const SwitchLang = () => {
	const [translations, i18n] = useTranslation('global');
	const { language, setLanguage } = useAppStore();
	const isSpanish = language === 'es';
	console.log(language);
	/* useEffect(() => {
		const initialLanguage = () => {
			i18n.changeLanguage(language);
			console.log('lenguaje', language);
		};
		initialLanguage();
	}, []); */

	const changeLanguage = () => {
		console.log('entra a esta monda');
		if (isSpanish) {
			i18n.changeLanguage('en');
			setLanguage('en');
		} else {
			i18n.changeLanguage('es');
			setLanguage('es');
		}
	};
	return (
		<div className='w-[60px] flex items-center'>
			{
				<Text className='underline font-bold'>
					{translations(isSpanish ? 'ES' : 'EN')}
				</Text>
			}
			<div
				onClick={changeLanguage}
				className='shadow lg:cursor-pointer ml-9 position: absolute w-[50px] h-[28px] bg-bluish-gray border-solid border-[3px] border-dark-blue rounded-[27px]'
			>
				<div
					className={`shadow transition-all relative ${
						isSpanish ? 'left-[-4px]' : 'left-[17px]'
					} bottom-[4px] w-[30px] h-[30px]  bg-dark-garnet border-[2px] border-dark-blue rounded-[50%]`}
				>
					{isSpanish ? (
						<ColFlag className='w-[100%] h-[100%]' />
					) : (
						<UsaFlag className='w-[100%] h-[100%]' />
					)}
				</div>
			</div>
		</div>
	);
};

export { SwitchLang };
