import type { ReactNode } from 'react';

type typeMainLayoutProps = {
    children: ReactNode;
    className?: string;
    hasMargin?: boolean;
};

const MainLayout = ({
    children,
    className,
    hasMargin,
}: typeMainLayoutProps) => {
    const wrapperDesign = 'mx-auto w-[90vw] 2xl:w-[1080px]';

    return (
        <main className={`bg-champagne-white min-h-screen ${className ?? ''}`}>
            <div className={`${hasMargin ? wrapperDesign : ''}`}>
                {children}
            </div>
        </main>
    );
};

export { MainLayout };
