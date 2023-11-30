import { z } from 'zod';

import { responsePostTaskSchema } from '../schema/taskSchema';

export type typesPostTask = z.infer<typeof responsePostTaskSchema>;

export type TypeTaskTab = 'today' | 'next' | 'someday';
