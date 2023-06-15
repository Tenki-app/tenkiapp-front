import { z } from 'zod';

export const userSchema = z.object({
    name: z.string(),
    user_name: z.string(),
    email: z.string().email(),
});
