import { useSession } from 'next-auth/react';

import { postData } from '../helpers/postData';
import { TASKS_ENDPOINTS } from '../utils/router';
import { typesPostTask } from '../types/tasks';
import { responsePostTaskSchema } from '../schema/taskSchema';
import { useMutation } from '@tanstack/react-query';

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
    const userId = data?.user?._id;

    return useMutation({
        mutationFn: (values: any) =>
            fetchPostSingleTask(userId, values, accessToken),
        onError: (err) => {
            console.error(err);
        },
    });
};
