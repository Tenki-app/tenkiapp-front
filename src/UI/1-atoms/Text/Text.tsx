import type { ReactNode } from 'react';

type typeTextProps = {
    children: ReactNode;
    className?: string;
};

const Text = ({ children, className }: typeTextProps): JSX.Element => {
    return <p className={`text-dark-blue text-xl font-primary ${className ?? ''}`}>{children}</p>;
};

export { Text };
