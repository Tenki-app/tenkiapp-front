import { useTranslation } from 'react-i18next';

import { useAppStore } from '@/lib/store/store';
import { Button } from '@/UI/1-atoms/Button/Button';

import type { TypeTaskTab } from '@/lib/types/tasks';

type TypeFilterTagsProps = {
	activeTag: TypeTaskTab;
	setActiveTag: () => void;
	containerStyles?: string;
};

const FilterTags = ({ activeTag, containerStyles }: TypeFilterTagsProps) => {
	const { t } = useTranslation();
	const { activeTaskTagFilter, setActiveTaskTagFilter } = useAppStore();

	const buttonStyles = '';

	const handleUpdateActiveTag = (tag: TypeTaskTab) => {};

	return (
		<ul className={`${containerStyles ?? ''}`}>
			<li>
				<Button
					onClick={() => {
						handleUpdateActiveTag('today');
					}}
				>
					{t('today')}
				</Button>
			</li>
			<li>
				<Button
					onClick={() => {
						handleUpdateActiveTag('next');
					}}
				>
					{t('next')}
				</Button>
			</li>
			<li>
				<Button
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
