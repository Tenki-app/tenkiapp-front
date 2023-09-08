import MoonIcon from '@/svg/theme/moonIcon.svg';
import SunIcon from '@/svg/theme/sunIcon.svg';
import { useEffect, useState } from 'react';
const ThemeMode = () => {
	const [theme, setTheme] = useState<'light' | 'dark'>('light');

	useEffect(() => {
		if (theme === 'dark') {
			document.querySelector('html')?.classList.add('dark');
		} else {
			document.querySelector('html')?.classList.remove('dark');
		}
	}, [theme]);

	const changeTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};
	return (
		<div className='transition-all'>
			{theme === 'light' ? (
				<MoonIcon
					className='lg:cursor-pointer w-[30px] h-[30px] mr-3'
					onClick={changeTheme}
				/>
			) : (
				<SunIcon
					className='lg:cursor-pointer w-[30px] h-[30px] mr-3'
					onClick={changeTheme}
				/>
			)}
		</div>
	);
};

export { ThemeMode };
