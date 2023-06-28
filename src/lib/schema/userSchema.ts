import { z } from 'zod';
import { taskSchema } from './taskSchema';

export const userSchema = z.object({
    _id: z.string(),
    name: z.string(),
    user_name: z.string(),
    email: z.string(),
    tasks: z.array(taskSchema).or(z.array(z.unknown()).min(0)),
});

export const responseUserLoginSchema = z.object({
    user: userSchema,
    accessToken: z.string(),
});
