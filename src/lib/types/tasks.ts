import { z } from 'zod';

import { responsePostTaskSchema } from '../schema/taskSchema';

export type typesPostTask = z.infer<typeof responsePostTaskSchema>;

export type TypeTaskCategory = 'today' | 'next' | 'someday';

export type TypeTaskState = 'done' | 'pending' | 'progress';
