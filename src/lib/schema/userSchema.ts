import { z } from 'zod';
import { taskSchema } from './taskSchema';

export const userSchema = z.object({
    name: z.string(),
    user_name: z.string(),
    email: z.string().email(),
    tasks: z.array(taskSchema),
});
