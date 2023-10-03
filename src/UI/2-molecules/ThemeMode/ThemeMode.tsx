import MoonIcon from '@/svg/theme/moonIcon.svg';
import SunIcon from '@/svg/theme/sunIcon.svg';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useAppStore } from '@/lib/store/store';
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
				<MoonIcon className='lg:cursor-pointer w-[30px] h-[30px] mr-3' />
			) : (
				<SunIcon className='lg:cursor-pointer w-[30px] h-[30px] mr-3' />
			)}
		</motion.div>
	);
};

export { ThemeMode };
