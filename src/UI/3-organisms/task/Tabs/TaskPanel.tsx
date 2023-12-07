import { tasksDummyData } from '@/lib/data/tasks';

import { CardTask } from '@/UI/3-organisms/task/cards/CardTask';
import { FilterTags } from '@/UI/3-organisms/Task/Filter/FilterTags';

import type { TypeTaskCategory, TypeTaskState } from '@/lib/types/tasks';

type TypeTaskPanelProps = {
	containerStyles?: string;
};

const TaskPanel = ({ containerStyles }: TypeTaskPanelProps) => {
	return (
		<div className={`w-full ${containerStyles ?? ''}`}>
			<FilterTags containerStyles='w-[90%] mx-auto' />
			<div className='bg-olive-drab w-full px-8 flex flex-col gap-y-4'>
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
