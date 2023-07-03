import type { ReactNode } from 'react';

type typeMainLayoutProps = {
    children: ReactNode;
    className?: string;
    hasMargin?: boolean;
    wrapperClasses?: string;
};

const MainLayout = ({
    children,
    className,
    hasMargin,
    wrapperClasses,
}: typeMainLayoutProps) => {
    const mainMargin = 'mx-auto w-[90vw] 2xl:w-[1080px]';

    return (
        <main className={`bg-champagne-white min-h-screen ${className ?? ''}`}>
            <div
                className={`${hasMargin ? mainMargin : ''} ${
                    wrapperClasses ?? ''
                }`}
            >
                {children}
            </div>
        </main>
    );
};

export { MainLayout };
