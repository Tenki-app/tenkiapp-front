import { AxiosInstance } from 'axios';

import { TASKS_ENDPOINTS } from '@/lib/utils/router';
import { typesPostTask } from '@/lib/types/tasks';
import { responsePostTaskSchema } from '@/lib/schema/taskSchema';
import { useMutation, useQuery } from '@tanstack/react-query';

// GET ALL TASKS
