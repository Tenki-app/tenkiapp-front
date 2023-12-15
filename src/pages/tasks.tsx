import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppStore } from '@/lib/store/store';
import { tasksDummyData } from '@/lib/data/tasks';

import { MainLayout } from '@/UI/4-layouts/MainLayout';
import { FilterTags } from '@/UI/3-organisms/Filter/FilterTabs';
import { ProgressBar } from '@/UI/2-molecules/Bar/ProgressBar';

import { TypeTaskCategory, TypeTaskState } from '@/lib/types/tasks';
import { PanelTasks } from '@/UI/3-organisms/Task/Tabs/PanelTasks';

const TaskPage = () => {
	const { activeTaskTabFilter, setActiveTaskTabFilter } = useAppStore();
	const { t } = useTranslation();

	const [tasksToShow, setTasksToShow] = useState<any[]>([]);

	const tasksTagContent = ['today', 'next', 'someday'];

	const tasksDone = useMemo(() => {
		return tasksDummyData.filter((task) => task.state === 'done');
		// Pending to fix when backend is ready
		// eslint-disable-next-line
	}, [tasksDummyData]);

	const tasksDonePercent = (tasksDone.length / tasksDummyData.length) * 100;

	useEffect(() => {
		const tasksFiltered = tasksDummyData.filter(
			(singleTask) => singleTask.category === activeTaskTabFilter
		);
		setTasksToShow(tasksFiltered);
	}, [activeTaskTabFilter]);

	return (
		<MainLayout>
			<section className='px-2 pt-10 pb-20 h-full'>
				<FilterTags
					tabsContent={tasksTagContent}
					activeTag={activeTaskTabFilter}
					setActiveTag={setActiveTaskTabFilter}
					containerStyles='w-[90%] mx-auto'
				/>
				<div className='bg-olive-drab h-full w-full px-8 pt-8'>
					<PanelTasks allTasks={tasksToShow} />
					<ProgressBar
						containerStyles='mt-6'
						progressPercent={tasksDonePercent}
					/>
				</div>
			</section>
		</MainLayout>
	);
};

export default TaskPage;
