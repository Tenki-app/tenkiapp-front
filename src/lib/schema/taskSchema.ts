import { z } from 'zod';
import { pomodoroSchema } from './pomodoroSchema';

const stateTypeEnum = z.enum(['done', 'pending', 'progress']);
const categoryTypeEnum = z.enum(['today', 'next', 'someday', '']);

export const taskSchema = z.object({
    category: categoryTypeEnum,
    date_created: z.string().nullable(),
    date_task: z.string().nullable(),
    title: z.string(),
    description: z.string().nullable(),
    state: stateTypeEnum,
    time: z.string().nullable(),
    is_pomodoro: z.boolean().nullable().optional(),
    pomodoro: z.array(pomodoroSchema).nullable(),
    id: z.string(),
});

export const responseGetAllTaskSchema = z.object({
    status: z.number(),
    message: z.string(),
    tasks: z.array(taskSchema),
});

export const responsePostTaskSchema = z.object({
    status: z.number(),
    message: z.string(),
    task: taskSchema,
});

export const responsePutTaskSchema = z.object({
    status: z.number(),
    message: z.string(),
    task: taskSchema,
});

export const resolverAddTaskFormSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().nullable(),
    category: categoryTypeEnum.refine(
        (value) => value !== '',
        'Category is required'
    ),
    date: z.string().nullable().optional(),
    hour: z.string().nullable().optional(),
});
