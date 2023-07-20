import React, { useState } from 'react';
import ColFlag from '@/svg/theme/colombiaFlag.svg';
import UsaFlag from '@/svg/theme/usaFlag.svg';
const SwitchLang = () => {
	const [lang, setLang] = useState(true);
	let positionClass = 'left-[-2px] ';
	const changeLanguage = () => {
		setLang(!lang);
		positionClass = 'left-[17px] ';
	};
	return (
		<div
			onClick={changeLanguage}
			className='position: absolute w-[50px] h-[28px] bg-dark-gray border-solid border-[3px] border-dark-blue rounded-[27px]'
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
	);
};

export { SwitchLang };
