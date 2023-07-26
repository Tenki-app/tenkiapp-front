import { z } from 'zod';
import { taskSchema } from './taskSchema';

export const userSchema = z.object({
    _id: z.string(),
    name: z.string(),
    user_name: z.string(),
    email: z.string(),
});

export const responseUserLoginSchema = z.object({
    user: userSchema,
    accessToken: z.string(),
});

export const responseRefreshTokenSchema = z.object({
    accessToken: z.string(),
    status: z.number(),
});
