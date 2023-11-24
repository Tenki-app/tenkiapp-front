import { z } from 'zod';
import { taskSchema } from './taskSchema';

export const userSchema = z.object({
	id: z.string(),
	name: z.string(),
	user_name: z.string(),
	email: z.string(),
	// TODO: change tasks type
	tasks: z.array(z.string()).nullable(),
});

export const userSignInSchema = z.object({
	name: z.string(),
	user_name: z.string(),
	email: z.string(),
});

export const userPostSignInResponseSchema = z.object({
	status: z.number(),
	message: z.string(),
	user: userSchema,
});
