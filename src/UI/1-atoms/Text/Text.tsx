import type { ReactNode } from 'react';

type typeTextProps = {
	children: ReactNode;
	className?: string;
};

const Text = ({ children, className }: typeTextProps): JSX.Element => {
	return (
		<p
			className={`text-dark-blue dark:text-champagne-white text-xl font-primary ${
				className ?? ''
			}`}
		>
			{children}
		</p>
	);
};

export { Text };
