import { AxiosInstance } from 'axios';

import { TASKS_ENDPOINTS } from '@/lib/utils/router';
import { typesPostTask } from '@/lib/types/tasks';
import { responsePostTaskSchema } from '@/lib/schema/taskSchema';
import { useMutation, useQuery } from '@tanstack/react-query';

// GET ALL TASKS
export const fetchGetAllTasks = async (
	userId?: string,
	apiAuth?: AxiosInstance
) => {
	/* if (!userId || !apiAuth) return null;

	const endpoint = TASKS_ENDPOINTS.GET_ALL_TASKS(userId);
	const response = await apiAuth.get(endpoint);

	return response; */
};
