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

	const buttonStyles = '';

	const handleUpdateActiveTag = (tag: TypeTaskTab) => {
		setActiveTaskTagFilter(tag);
	};

	return (
		<ul className={`flex gap-3 justify-center ${containerStyles ?? ''}`}>
			<li>
				<Button
					className={`${activeTaskTagFilter === 'today' ? '' : ''} ${
						buttonStyles ?? ''
					}`}
					variant='blue'
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
					variant='blue'
				>
					{t('next')}
				</Button>
			</li>
			<li>
				<Button
					onClick={() => {
						handleUpdateActiveTag('someday');
					}}
					variant='blue'
				>
					{t('someday')}
				</Button>
			</li>
		</ul>
	);
};

export { FilterTags };
