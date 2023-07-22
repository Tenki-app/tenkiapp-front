import { useSession } from 'next-auth/react';

import { postData } from '../helpers/postData';
import { TASKS_ENDPOINTS } from '../utils/router';
import { typesPostTask } from '../types/tasks';
import { responsePostTaskSchema } from '../schema/taskSchema';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getData } from '../helpers/getData';

// GET ALL TASKS
export const fetchGetAllTasks = async (
    userId?: string,
    accessToken?: string
) => {
    if (!userId || !accessToken) return null;

    const endpoint = TASKS_ENDPOINTS.GET_ALL_TASKS(userId);
    const response = await getData(endpoint, accessToken);
    return response;
};
export const useGetAllTasks = () => {
    const { data } = useSession();

    const accessToken = data?.user?.accessToken;
    const userId = data?.user?.user._id;

    const query = useQuery({
        queryKey: ['allTasks', userId],
        queryFn: async () => {
            return fetchGetAllTasks(userId, accessToken);
        },
        onError: (err) => {
            console.error(err);
        },
    });

    return {
        resp: query,
    };
};

// CREATE SINGLE TASK
export const fetchPostSingleTask = async (
    userId?: string,
    values?: any, // Pending to define
    accessToken?: string
) => {
    if (!userId || !accessToken || !values) return null;

    const endpoint = TASKS_ENDPOINTS.POST_SINGLE_TASK(userId);
    const response = await postData(endpoint, values, accessToken);

    return responsePostTaskSchema.parse(response);
};
export const usePostSingleTask = () => {
    const { data } = useSession();

    const accessToken = data?.user?.accessToken;
    const userId = data?.user?.user._id;

    return useMutation({
        mutationFn: (values: any) =>
            fetchPostSingleTask(userId, values, accessToken),
        onError: (err) => {
            console.error(err);
        },
    });
};
