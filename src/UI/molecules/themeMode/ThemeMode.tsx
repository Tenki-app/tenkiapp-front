import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { useAppStore } from '@/lib/store/store';

import MoonIcon from '@/svg/theme/moonIcon.svg';
import SunIcon from '@/svg/theme/sunIcon.svg';

const ThemeMode = () => {
	const { theme, setTheme } = useAppStore();
	useEffect(() => {
		if (theme === 'dark') {
			document.querySelector('html')?.classList.add('dark');
		} else {
			document.querySelector('html')?.classList.remove('dark');
		}
	}, [theme]);

	const changeTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	const variantsTheme = {
		dark: { rotateX: '180deg' },
		light: { rotate: '0' },
	};

	return (
		<motion.div
			onClick={changeTheme}
			animate={theme}
			variants={variantsTheme}
			transition={{ duration: 0.5 }}
		>
			{theme === 'light' ? (
				<MoonIcon className='lg:cursor-pointer w-[30px] h-[30px] mr-3 text-champagne-white' />
			) : (
				<SunIcon className='lg:cursor-pointer w-[30px] h-[30px] mr-3 text-champagne-white' />
			)}
		</motion.div>
	);
};

export { ThemeMode };
