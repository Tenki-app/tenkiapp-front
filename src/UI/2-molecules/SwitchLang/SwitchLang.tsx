import React, { useState } from 'react';
import ColFlag from '@/svg/theme/colombiaFlag.svg';
import UsaFlag from '@/svg/theme/usaFlag.svg';
import { useTranslation } from 'react-i18next';
const SwitchLang = () => {
	const [translations, i18n] = useTranslation('global');
	const [lang, setLang] = useState(true);
	const changeLanguage = () => {
		setLang(!lang);
	};
	return (
		<div className='w-[60px] flex items-center'>
			<p className='underline text-xl font-bold text-dark-blue'>
				{translations(lang ? 'ES' : 'EN')}
			</p>
			<div
				onClick={changeLanguage}
				className='ml-9 position: absolute w-[50px] h-[28px] bg-dark-gray border-solid border-[3px] border-dark-blue rounded-[27px]'
			>
				<div
					className={`transition-all relative ${
						lang ? 'left-[-4px]' : 'left-[17px]'
					} bottom-[4px] w-[30px] h-[30px] bg-dark-garnet border-[2px] border-dark-blue rounded-[50%]`}
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
