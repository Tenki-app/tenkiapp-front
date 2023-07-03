import { z } from 'zod';

export const pomodoroSchema = z.object({
    work_time: z.number(),
    break_time: z.number(),
    rounds: z.number(),
});
