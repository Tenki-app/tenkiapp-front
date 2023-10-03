import Link from 'next/link';
import { useRouter } from 'next/router';

import type { ReactNode, MouseEventHandler } from 'react';

type typeButtonProps = {
	children: ReactNode;
	className?: string;
	onClick?: MouseEventHandler;
	redirect?: string;
	type?: 'button' | 'submit' | 'reset';
	variant?: 'fill' | 'underline';
};

const Button = ({
	children,
	className,
	onClick,
	redirect,
	type = 'button',
	variant = 'fill',
}: typeButtonProps): JSX.Element => {
	let designButton = '';

	if (variant === 'fill') {
		designButton =
			'w-max rounded-lg bg-dark-blue dark:bg-champagne-white text-champagne-white dark:text-dark-blue dark:font-medium px-8 py-2 font-medium';
	} else if (variant === 'underline') {
		designButton =
			'text-lg w-max text-champagne-white underline font-medium';
	}

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
					type={type}
				>
					{children}
				</button>
			)}
		</>
	);
};

export { Button };
