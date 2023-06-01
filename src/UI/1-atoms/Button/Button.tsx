import Link from 'next/link';
import { useRouter } from 'next/router';

import type { ReactNode, MouseEventHandler } from 'react';

type typeButtonProps = {
    children: ReactNode;
    className?: string;
    onClick?: MouseEventHandler;
    redirect?: string;
};

const Button = ({ children, className, onClick, redirect }: typeButtonProps): JSX.Element => {
    const designButton = 'text-lg rounded-lg bg-dark-blue text-white px-6 py-2';

    return (
        <>
            {redirect ? (
                <Link
                    className={`${designButton} ${className ?? ''}`}
                    href={redirect}
                    onClick={onClick}
                >
                    {children}
                </Link>
            ) : (
                <button
                    className={`${designButton} ${className ?? ''}`}
                    onClick={onClick}
                >
                    {children}
                </button>
            )}
        </>
    );
};

export { Button };
