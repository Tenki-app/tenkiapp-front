import { useEffect, useState } from 'react';

import { tasksDummyData } from '@/lib/data/tasks';

import { CardTask } from '@/UI/3-organisms/task/cards/CardTask';
import { FilterTags } from '@/UI/3-organisms/Filter/FilterTabs';

import type { TypeTaskCategory, TypeTaskState } from '@/lib/types/tasks';

type TypeTaskPanelProps = {
	activeTaskTabFilter: TypeTaskCategory;
	setActiveTaskTabFilter: (activeTaskTabFilter: TypeTaskCategory) => void;
	containerStyles?: string;
};

const TaskPanel = ({
	activeTaskTabFilter,
	setActiveTaskTabFilter,
	containerStyles,
}: TypeTaskPanelProps) => {
	const [tasksToShow, setTasksToShow] = useState<any[]>([]);

	const tasksTagContent = ['today', 'next', 'someday'];

	useEffect(() => {
		const tasksFiltered = tasksDummyData.filter(
			(singleTask) => singleTask.category === activeTaskTabFilter
		);
		setTasksToShow(tasksFiltered);
	}, [activeTaskTabFilter]);

	return (
		<div className={`w-full ${containerStyles ?? ''}`}>
			<FilterTags
				tabsContent={tasksTagContent}
				activeTag={activeTaskTabFilter}
				setActiveTag={setActiveTaskTabFilter}
				containerStyles='w-[90%] mx-auto'
			/>
			<div className='bg-olive-drab w-full px-8 py-10 flex flex-col gap-y-4'>
				{tasksToShow.map((singleTask, index) => (
					<CardTask
						key={index}
						title={singleTask.title}
						description={singleTask.description}
						time={singleTask.time}
						date={singleTask.date}
						state={singleTask.state as TypeTaskState}
						category={singleTask.category as TypeTaskCategory}
					/>
				))}
			</div>
		</div>
	);
};

export { TaskPanel };
