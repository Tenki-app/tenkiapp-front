import { useTranslation } from 'react-i18next';

import { Button } from '@/UI/1-atoms/button/Button';

type TypeFilterTagsProps = {
	activeTag: string;
	setActiveTag: (value: any) => void;
	tabsContent: string[];
	containerStyles?: string;
};

const FilterTags = ({
	activeTag,
	setActiveTag,
	tabsContent,
	containerStyles,
}: TypeFilterTagsProps) => {
	const { t } = useTranslation();

	const buttonStyles =
		'bg-dark-blue rounded-tl rounded-tr text-white px-6 md:px-8 py-2 fast-transition font-semibold';
	const activeButtonStyles = '!bg-bluish-gray';

	const handleUpdateActiveTag = (tag: string) => {
		setActiveTag(tag);
	};

	const handleButtonStyles = (tag: string) =>
		`${activeTag === tag ? activeButtonStyles : ''} ${buttonStyles ?? ''}`;

	return (
		<ul className={`flex gap-3 justify-center ${containerStyles ?? ''}`}>
			{tabsContent.map((tag, index) => (
				<li key={index + tag}>
					<Button
						className={handleButtonStyles(tag)}
						onClick={() => {
							handleUpdateActiveTag(tag);
						}}
					>
						{t(tag)}
					</Button>
				</li>
			))}
		</ul>
	);
};

export { FilterTags };
