import { AxiosInstance } from 'axios';

import { TASKS_ENDPOINTS } from '@/lib/utils/router';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getDataWithAuth } from '@/lib/helpers/fetching/getData';
import { useAppStore } from '@/lib/store/store';
import { useAuth0 } from '@auth0/auth0-react';

import { responseGetAllTaskSchema } from '@/lib/schema/taskSchema';

const fetchGetAllTasks = async (getIdTokenClaims: any, userId?: string) => {
	const idToken = await getIdTokenClaims();
	if (!idToken || !userId) return null;

	const endpoint = TASKS_ENDPOINTS.GET_ALL_TASKS(userId);

	const response = await getDataWithAuth(endpoint, idToken?.__raw);

	return responseGetAllTaskSchema.parse(response);
};
export const useGetAllTasks = (userId?: string) => {
	const { setIsLoading } = useAppStore();
	const { getIdTokenClaims } = useAuth0();

	const { data, isError, error, isLoading } = useQuery({
		queryKey: ['allTasks'],
		queryFn: async () => {
			setIsLoading(true);
			return fetchGetAllTasks(getIdTokenClaims, userId);
		},
		onError: (err: any) => {
			setIsLoading(false);
			console.error(err);
		},
		onSettled: () => {
			setIsLoading(false);
		},
	});

	return {
		allTasks: data?.tasks,
		isLoading,
		isError,
		error,
	};
};
