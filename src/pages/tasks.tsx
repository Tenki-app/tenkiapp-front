import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppStore } from '@/lib/store/store';

import { MainLayout } from '@/UI/4-layouts/MainLayout';
import { tasksDummyData } from '@/lib/data/tasks';
import { CardTask } from '@/UI/3-organisms/task/cards/CardTask';
import { FilterTags } from '@/UI/3-organisms/Filter/FilterTabs';

import { TypeTaskCategory, TypeTaskState } from '@/lib/types/tasks';

const TaskPage = () => {
	const { activeTaskTabFilter, setActiveTaskTabFilter } = useAppStore();
	const { t } = useTranslation();

	const [tasksToShow, setTasksToShow] = useState<any[]>([]);

	const tasksTagContent = ['today', 'next', 'someday'];

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
					<div className='flex flex-col h-[80%] gap-y-4 overflow-y-auto'>
						{tasksToShow.map((singleTask, index) => (
							<CardTask
								key={index}
								title={singleTask.title}
								description={singleTask.description}
								time={singleTask.time}
								date={singleTask.date}
								state={singleTask.state as TypeTaskState}
								category={
									singleTask.category as TypeTaskCategory
								}
							/>
						))}
					</div>
				</div>
			</section>
		</MainLayout>
	);
};

export default TaskPage;
