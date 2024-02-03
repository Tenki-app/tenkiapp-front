import { z } from 'zod';
import { pomodoroSchema } from './pomodoroSchema';

const stateTypeEnum = z.enum(['done', 'pending', 'progress']);
const categoryTypeEnum = z.enum(['today', 'tomorrow', 'someday']);

export const taskSchema = z.object({
	category: categoryTypeEnum,
	date_created: z.string(),
	date_task: z.string(),
	title: z.string(),
	description: z.string(),
	state: stateTypeEnum,
	time: z.string(),
	is_pomodoro: z.boolean().nullable().optional(),
	pomodoro: z.array(pomodoroSchema).nullable(),
	_id: z.string(),
});

export const responseGetAllTaskSchema = z.object({
	status: z.number(),
	message: z.string(),
	tasks: z.array(taskSchema),
});

export const responsePostTaskSchema = z.object({
	code: z.number(),
	message: z.string(),
	task: taskSchema,
});
