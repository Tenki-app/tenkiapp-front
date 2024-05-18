import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

type typeTextProps = {
    children: ReactNode;
    className?: string;
    variant?: 'custom' | 'default';
};

const Text = ({
    children,
    className,
    variant = 'default',
}: typeTextProps): JSX.Element => {
    let textDesign = 'text-base font-primary ';
    if (variant === 'custom') {
        textDesign += '';
    } else if (variant === 'default') {
        textDesign +=
            'text-dark-blue dark:text-champagne-white text-base font-primary';
    }
    return <p className={twMerge(textDesign, className)}>{children}</p>;
};

export { Text };
