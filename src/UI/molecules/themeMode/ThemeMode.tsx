import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '@/lib/store/store';
import MoonIcon from '@/svg/theme/moonIcon.svg';
import SunIcon from '@/svg/theme/sunIcon.svg';
import { typeLangThemeProps } from '@/lib/types/langTheme';

const ThemeMode = ({ variant }: typeLangThemeProps) => {
    const { theme, setTheme } = useAppStore();
    let iconStyles = 'lg:cursor-pointer w-[30px] h-[30px] ';
    if (variant === 'nav') {
        iconStyles += 'text-champagne-white';
    } else if (variant === 'screen') {
        iconStyles += 'mr-[15px] text-dark-blue dark:text-champagne-white';
    }
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
                <MoonIcon className={iconStyles} />
            ) : (
                <SunIcon className={iconStyles} />
            )}
        </motion.div>
    );
};

export { ThemeMode };
