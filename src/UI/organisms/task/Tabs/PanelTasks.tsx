import { CardTask } from '../cards/CardTask';

import type { TypeTaskCategory, TypeTaskState } from '@/lib/types/tasks';
import type { TypeTask } from '@/lib/types/tasks';

type TypeCardTaskProps = {
	allTasks?: TypeTask[];
};

const PanelTasks = ({ allTasks }: TypeCardTaskProps) => {
	return (
		<div className='flex flex-col h-[80%] px-1 gap-y-4 overflow-y-auto'>
			{allTasks?.map((singleTask: any, index: number) => (
				<CardTask
					key={index}
					title={singleTask.title}
					description={singleTask.description}
					time={singleTask.time}
					date={singleTask.date_task}
					state={singleTask.state as TypeTaskState}
					category={singleTask.category as TypeTaskCategory}
				/>
			))}
		</div>
	);
};

export { PanelTasks };
