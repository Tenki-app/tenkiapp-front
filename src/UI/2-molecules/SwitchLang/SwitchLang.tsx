import React, { useState } from 'react';
import ColFlag from '@/svg/theme/colombiaFlag.svg';
import UsaFlag from '@/svg/theme/usaFlag.svg';
import { useTranslation } from 'react-i18next';
import { Text } from '@/UI/1-atoms/Text/Text';
const SwitchLang = () => {
	const [translations, i18n] = useTranslation('global');
	const [lang, setLang] = useState(true);
	const changeLanguage = () => {
		setLang(!lang);
		lang ? i18n.changeLanguage('en') : i18n.changeLanguage('es');
	};
	return (
		<div className='w-[60px] flex items-center'>
			<Text className='underline font-bold'>
				{translations(lang ? 'ES' : 'EN')}
			</Text>
			<p></p>
			<div
				onClick={changeLanguage}
				className='shadow lg:cursor-pointer ml-9 position: absolute w-[50px] h-[28px] bg-bluish-gray border-solid border-[3px] border-dark-blue rounded-[27px]'
			>
				<div
					className={`shadow transition-all relative ${
						lang ? 'left-[-4px]' : 'left-[17px]'
					} bottom-[4px] w-[30px] h-[30px]  bg-dark-garnet border-[2px] border-dark-blue rounded-[50%]`}
				>
					{lang ? (
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
