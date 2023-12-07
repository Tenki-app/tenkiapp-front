import { useTranslation } from 'react-i18next';

import { useAppStore } from '@/lib/store/store';

import { MainLayout } from '@/UI/4-layouts/MainLayout';
import { TaskPanel } from '@/UI/3-organisms/Task/Tabs/TaskPanel';

import type { TypeTabContent } from '@/lib/types/type';

const TaskPage = () => {
	const { activeTaskTabFilter, setActiveTaskTabFilter } = useAppStore();
	const { t } = useTranslation();

	return (
		<MainLayout>
			<section className='px-2 py-10'>
				<TaskPanel
					activeTaskTabFilter={activeTaskTabFilter}
					setActiveTaskTabFilter={setActiveTaskTabFilter}
				/>
			</section>
		</MainLayout>
	);
};

export default TaskPage;
