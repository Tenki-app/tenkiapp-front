import { NavBar } from '../molecules/nav/NavBar';
import { SwitchLang } from '../molecules/switchLang/SwitchLang';
import { ThemeMode } from '../molecules/themeMode/ThemeMode';

import type { ReactNode } from 'react';

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
            className={`bg-champagne-white w-screen h-screen ${
                className ?? ''
            } dark:bg-dark-blue`}
        >
            <div
                className={`h-full ${hasMargin ? mainMargin : ''} ${
                    wrapperClasses ?? ''
                }`}
            >
                {hasNav && (
                    <div className='flex p-3 md:hidden'>
                        <ThemeMode variant='screen' />
                        <SwitchLang variant='screen' />
                    </div>
                )}

                {children}
            </div>
        </main>
    );
};

export { MainLayout };
