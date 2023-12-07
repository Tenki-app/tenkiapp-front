import { useTranslation } from 'react-i18next';

import { useAppStore } from '@/lib/store/store';

import { MainLayout } from '@/UI/4-layouts/MainLayout';
import { TaskPanel } from '@/UI/3-organisms/Task/Tabs/TaskPanel';

import type { TypeTabContent } from '@/lib/types/type';

const TaskPage = () => {
	const { activeTaskTagFilter, setActiveTaskTagFilter } = useAppStore();
	const { t } = useTranslation();

	return (
		<MainLayout>
			<section className='px-2'>
				<TaskPanel
					activeTaskTagFilter={activeTaskTagFilter}
					setActiveTaskTagFilter={setActiveTaskTagFilter}
				/>
			</section>
		</MainLayout>
	);
};

export default TaskPage;
