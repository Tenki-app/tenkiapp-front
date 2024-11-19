import { z } from 'zod';

import { taskSchema } from '../schema/taskSchema';

export type TypeTask = z.infer<typeof taskSchema>;

export type TypeTaskCategory = 'today' | 'next' | 'someday' | '';

export type TypeTaskState = 'done' | 'pending' | 'progress';

export type TypeAddTaskForm = {
	title: string;
	description: string | null;
	category: TypeTaskCategory;
	date: string | null;
	hour: string | null;
};

export type TypeEditTaskForm = Partial<TypeAddTaskForm> & {
	taskId: string;
};

export type TypeDeleteTaskParams = {
	taskId: string;
	userId: string;
};
