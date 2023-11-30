import { useTranslation } from 'react-i18next';

import { Tab } from '../../Tab/Tab';

import type { TypeTabContent } from '@/lib/types/type';

const TaskTab = () => {
	const { t } = useTranslation();

	const tabContent: Array<TypeTabContent> = [
		{
			header: t('today'),
			body: <div>Today</div>,
		},
		{
			header: t('tasks'),
			body: <div>Tasks</div>,
		},
		{
			header: t('someday'),
			body: <div>Someday</div>,
		},
	];

	return <div>{<Tab tabContent={tabContent} />}</div>;
};

export default TaskTab;
