import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppStore } from '@/lib/store/store';
import { tasksDummyData } from '@/lib/data/tasks';

import { MainLayout } from '@/UI/layouts/MainLayout';
import { FilterTags } from '@/UI/organisms/filter/FilterTabs';
import { ProgressBar } from '@/UI/molecules/bar/ProgressBar';
import { PanelTasks } from '@/UI/organisms/task/Tabs/PanelTasks';
import { Button } from '@/UI/atoms/button/Button';
import AddIcon from '@/svg/task/addIcon.svg';

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
				<div className='bg-olive-drab h-full w-full flex flex-col justify-around px-8 pt-4 pb-4'>
					<PanelTasks allTasks={tasksToShow} />
					<div className=''>
						<ProgressBar
							containerStyles='mt-6'
							progressPercent={tasksDonePercent}
						/>
						<div className='flex justify-end mt-4'>
							<Button className='bg-dark-blue p-3 rounded-full'>
								<AddIcon className='w-[20px] h-[20px]' />
							</Button>
						</div>
					</div>
				</div>
			</section>
		</MainLayout>
	);
};

export default TaskPage;
