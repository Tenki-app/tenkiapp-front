import type { ReactNode } from 'react';
import { SwitchLang } from '../2-molecules/SwitchLang/SwitchLang';
import { ThemeMode } from '../2-molecules/ThemeMode/ThemeMode';
import { Pill } from '../2-molecules/Pill/Pill';

type typeMainLayoutProps = {
	children: ReactNode;
	className?: string;
	hasMargin?: boolean;
	wrapperClasses?: string;
	hasNav?: boolean;
};

const MainLayout = ({
	children,
	className,
	hasMargin,
	wrapperClasses,
	hasNav,
}: typeMainLayoutProps) => {
	const mainMargin = 'mx-auto w-[90vw] 2xl:w-[1080px]';

	return (
		<main
			className={`bg-champagne-white min-h-screen ${
				className ?? ''
			} dark:bg-dark-blue`}
		>
			<div
				className={`${hasMargin ? mainMargin : ''} ${
					wrapperClasses ?? ''
				}`}
			>
				{hasNav && (
					<div className='flex p-3 '>
						<ThemeMode />
						<SwitchLang />
					</div>
				)}

				{children}
			</div>
		</main>
	);
};

export { MainLayout };
