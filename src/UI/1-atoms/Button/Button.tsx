import Link from 'next/link';
import { useRouter } from 'next/router';

import type { ReactNode, MouseEventHandler } from 'react';

type typeButtonProps = {
	children: ReactNode;
	className?: string;
	onClick?: MouseEventHandler;
	redirect?: string;
	type?: 'button' | 'submit' | 'reset';
	variant?: 'fill' | 'underline' | 'blue' | 'ghost';
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
			'w-max text-champagne-white dark:text-dark-blue dark:font-medium font-medium';
	} else if (variant === 'underline') {
		designButton =
			'text-lg w-max text-champagne-white underline font-medium';
	} else if (variant === 'blue') {
		designButton =
			'px-8 py-2 mt-2 rounded-lg bg-dark-blue text-white dark:bg-champagne-white';
	} else if (variant === 'ghost') {
		designButton =
			'px-8 py-2 mt-2 rounded-lg bg-transparent border border-dark-blue text-dark-blue dark:text-champagne-white';
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
