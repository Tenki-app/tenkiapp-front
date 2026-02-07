import { SwitchLang } from '../molecules/switchLang/SwitchLang';
import { ThemeMode } from '../molecules/themeMode/ThemeMode';

import type { ReactNode } from 'react';

type typeMainLayoutProps = {
	children: ReactNode;
	className?: string;
	hasMobileNav?: boolean;
};

const MainLayout = ({
	children,
	className,
	hasMobileNav,
}: typeMainLayoutProps) => {
	return (
		<main
			className={`bg-champagne-white w-screen ${
				className ?? ''
			} dark:bg-dark-blue`}
		>
			{hasMobileNav && (
				<div className='flex p-3 md:hidden'>
					<ThemeMode variant='screen' />
					<SwitchLang variant='screen' />
				</div>
			)}
			{children}
		</main>
	);
};

export { MainLayout };
