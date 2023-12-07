import { useTranslation } from 'react-i18next';

import { MainLayout } from '@/UI/4-layouts/MainLayout';
import { FilterTags } from '@/UI/3-organisms/Task/Filter/FilterTags';
import { TaskPanel } from '@/UI/3-organisms/Task/Tabs/TaskPanel';

import type { TypeTabContent } from '@/lib/types/type';

const TaskPage = () => {
	const { t } = useTranslation();

	return (
		<MainLayout>
			<section className='px-2'>
				<TaskPanel />
			</section>
		</MainLayout>
	);
};

export default TaskPage;
