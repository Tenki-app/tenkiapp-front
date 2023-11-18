import type { ReactNode } from 'react';

export type typeTitle = {
	children: ReactNode;
	className?: string;
	type?: string;
};

const Title = ({
	children,
	className,
	type = 'title',
}: typeTitle): JSX.Element => {
	return (
		<>
			{type === 'title' && (
				<h1
					className={`text-3xl text-dark-blue font-primary font-medium ${
						className ?? ''
					}`}
				>
					{children}
				</h1>
			)}
			{type === 'subtitle' && (
				<h2
					className={`text-2xl text-dark-blue font-primary font-bold ${
						className ?? ''
					}`}
				>
					{children}
				</h2>
			)}
		</>
	);
};
export { Title };
