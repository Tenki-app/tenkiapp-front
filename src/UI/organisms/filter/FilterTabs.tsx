import { useTranslation } from 'react-i18next';

import { Button } from '@/UI/atoms/button/Button';

type TypeFilterTagsProps = {
	activeTag: string;
	setActiveTag: (value: any) => void;
	tabsContent: string[];
	containerStyles?: string;
	testId?: string;
};

const FilterTabs = ({
	activeTag,
	setActiveTag,
	tabsContent,
	containerStyles,
	testId,
}: TypeFilterTagsProps) => {
	const { t } = useTranslation();

	const buttonStyles =
		'bg-dark-blue rounded-tl rounded-tr text-white px-6 md:px-8 py-2 fast-transition font-semibold text-sm xs:text-lg';
	const activeButtonStyles = '!bg-bluish-gray';

	const handleUpdateActiveTag = (tag: string) => {
		setActiveTag(tag);
	};

	const handleButtonStyles = (tag: string) =>
		`${activeTag === tag ? activeButtonStyles : ''} ${buttonStyles ?? ''}`;

	return (
		<ul
			className={`flex gap-3 justify-center ${containerStyles ?? ''}`}
			data-testid={testId}
		>
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

export { FilterTabs };
