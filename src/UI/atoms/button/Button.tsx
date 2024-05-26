import Link from 'next/link';

import type { ReactNode, MouseEventHandler } from 'react';

type typeButtonProps = {
	children: ReactNode;
	className?: string;
	onClick?: MouseEventHandler;
	redirect?: string;
	type?: 'button' | 'submit' | 'reset';
	variant?:
		| 'underline'
		| 'blue'
		| 'custom'
		| 'bordered'
		| 'ghost'
		| 'rounded';
	isHover?: boolean;
	isDisabled?: boolean;
};

const Button = ({
	children,
	className,
	onClick,
	redirect,
	type = 'button',
	variant = 'custom',
	isHover = false,
	isDisabled,
	...restProps
}: typeButtonProps): JSX.Element => {
	const variantStyles = () => {
		let designButton = `font-primary ${isHover ? 'ov-btn-slide-left' : ''}`;

		if (variant === 'underline') {
			designButton +=
				'text-lg w-max text-champagne-white underline font-medium';
		} else if (variant === 'blue') {
			designButton +=
				'px-8 py-2 rounded-lg bg-dark-blue text-champagne-white dark:bg-champagne-white dark:text-dark-blue font-bold';
		} else if (variant === 'custom') {
			designButton += '';
		} else if (variant === 'bordered') {
			designButton += 'px-8 py-2 rounded-lg border-dark-blue border';
		} else if (variant === 'ghost') {
			designButton += 'p-2';
		} else if (variant === 'rounded') {
			designButton += 'rounded-full bg-dark-blue p-3';
		}

		return designButton;
	};

	return (
		<>
			{redirect ? (
				<Link
					className={`${variantStyles()} ${className ?? ''}`}
					href={redirect}
					onClick={onClick}
					{...restProps}
				>
					{children}
				</Link>
			) : (
				<button
					className={`${variantStyles()} ${className ?? ''}`}
					onClick={onClick}
					type={type}
					disabled={isDisabled}
					{...restProps}
				>
					{children}
				</button>
			)}
		</>
	);
};

export { Button };
