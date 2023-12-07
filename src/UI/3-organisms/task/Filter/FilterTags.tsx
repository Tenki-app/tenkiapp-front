import { useTranslation } from 'react-i18next';

import { useAppStore } from '@/lib/store/store';
import { Button } from '@/UI/1-atoms/Button/Button';

import type { TypeTaskTab } from '@/lib/types/tasks';

type TypeFilterTagsProps = {
	containerStyles?: string;
};

const FilterTags = ({ containerStyles }: TypeFilterTagsProps) => {
	const { t } = useTranslation();
	const { activeTaskTagFilter, setActiveTaskTagFilter } = useAppStore();

	const buttonStyles =
		'bg-dark-blue rounded-tl rounded-tr text-white px-4 md:px-8 py-2 fast-transition font-bold';
	const activeButtonStyles = '!bg-bluish-gray';

	const handleUpdateActiveTag = (tag: TypeTaskTab) => {
		setActiveTaskTagFilter(tag);
	};

	const handleButtonStyles = (tag: TypeTaskTab) =>
		`${activeTaskTagFilter === tag ? activeButtonStyles : ''} ${
			buttonStyles ?? ''
		}`;

	return (
		<ul className={`flex gap-3 justify-center ${containerStyles ?? ''}`}>
			<li>
				<Button
					className={handleButtonStyles('today')}
					onClick={() => {
						handleUpdateActiveTag('today');
					}}
				>
					{t('today')}
				</Button>
			</li>
			<li>
				<Button
					className={handleButtonStyles('next')}
					onClick={() => {
						handleUpdateActiveTag('next');
					}}
				>
					{t('next')}
				</Button>
			</li>
			<li>
				<Button
					className={handleButtonStyles('someday')}
					onClick={() => {
						handleUpdateActiveTag('someday');
					}}
				>
					{t('someday')}
				</Button>
			</li>
		</ul>
	);
};

export { FilterTags };
