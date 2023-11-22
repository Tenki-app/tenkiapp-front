import { z } from 'zod';
import { taskSchema } from './taskSchema';

export const userSchema = z.object({
	_id: z.string(),
	name: z.string(),
	user_name: z.string(),
	email: z.string(),
});

export const userSignInSchema = z.object({
	name: z.string(),
	user_name: z.string(),
	email: z.string(),
});
