import Link from 'next/link';

type typeLinkElementProps = {
	text: string;
	redirect: string | null;
	stylesLink?: string;
};

const LinkElement = ({ text, redirect, stylesLink }: typeLinkElementProps) => {
	return (
		<Link
			className={`${stylesLink ?? ''}`}
			href={redirect ?? ''}
		>
			{text}
		</Link>
	);
};

export { LinkElement };
