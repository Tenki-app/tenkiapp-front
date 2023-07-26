import { z } from 'zod';
import { pomodoroSchema } from './pomodoroSchema';

const stateTypeEnum = z.enum(['done', 'pending', 'progress']);
const categoryTypeEnum = z.enum(['today', 'tomorrow', 'someday']);

export const taskSchema = z.object({
    _id: z.string(),
    title: z.string(),
    description: z.string(),
    state: stateTypeEnum,
    category: categoryTypeEnum,
    date_task: z.string(),
    date_created: z.string(),
    time: z.string(),
    is_pomodoro: z.boolean(),
    pomodoro: z.array(pomodoroSchema).nullable(),
});

export const responsePostTaskSchema = z.object({
    code: z.number(),
    message: z.string(),
    task: taskSchema,
});
