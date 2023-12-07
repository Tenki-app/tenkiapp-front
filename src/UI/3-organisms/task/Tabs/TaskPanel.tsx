import { useState } from 'react';

import { tasksDummyData } from '@/lib/data/tasks';

import { CardTask } from '@/UI/3-organisms/task/cards/CardTask';
import { FilterTags } from '@/UI/3-organisms/Filter/FilterTabs';

import type { TypeTaskCategory, TypeTaskState } from '@/lib/types/tasks';

type TypeTaskPanelProps = {
	activeTaskTagFilter: TypeTaskCategory;
	setActiveTaskTagFilter: (activeTaskTagFilter: TypeTaskCategory) => void;
	containerStyles?: string;
};

const TaskPanel = ({
	activeTaskTagFilter,
	setActiveTaskTagFilter,
	containerStyles,
}: TypeTaskPanelProps) => {
	const [tasksToShow, setTasksToShow] = useState<any>([]);

	const tasksTagContent = ['today', 'next', 'someday'];

	return (
		<div className={`w-full ${containerStyles ?? ''}`}>
			<FilterTags
				tabsContent={tasksTagContent}
				activeTag={activeTaskTagFilter}
				setActiveTag={setActiveTaskTagFilter}
				containerStyles='w-[90%] mx-auto'
			/>
			<div className='bg-olive-drab w-full px-8 py-10 flex flex-col gap-y-4'>
				{tasksDummyData.map((singleTask, index) => (
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
