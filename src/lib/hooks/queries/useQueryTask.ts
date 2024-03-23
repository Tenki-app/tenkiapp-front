import { useAuth0 } from '@auth0/auth0-react';

import { TASKS_ENDPOINTS } from '@/lib/utils/router';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getDataWithAuth } from '@/lib/helpers/fetching/getData';
import { useAppStore } from '@/lib/store/store';
import { postDataWithAuth } from '@/lib/helpers/fetching/postData';
import { putDataWithToken } from '@/lib/helpers/fetching/putData';

import {
    responseGetAllTaskSchema,
    responsePostTaskSchema,
    responsePutTaskSchema,
} from '@/lib/schema/taskSchema';
import { TypeAddTaskForm, TypeEditTaskForm } from '@/lib/types/tasks';

// get all tasks
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
        queryKey: ['allTasks', userId],
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

// create single task
const fetchPostSingleTask = async (
    getIdTokenClaims: any,
    taskValues: TypeAddTaskForm,
    userId?: string
) => {
    const idToken = await getIdTokenClaims();

    if (!idToken || !userId) return null;

    const endpoint = TASKS_ENDPOINTS.POST_SINGLE_TASK(userId);

    const response = await postDataWithAuth(
        endpoint,
        taskValues,
        idToken?.__raw
    );

    return responsePostTaskSchema.parse(response);
};
export const usePostSingleTask = () => {
    const { setIsLoading, user } = useAppStore();
    const { getIdTokenClaims } = useAuth0();
    const currentQueryClient = useQueryClient();

    const { mutateAsync, isLoading, isError } = useMutation({
        mutationKey: ['createSingleTask'],
        mutationFn: (values: TypeAddTaskForm) => {
            setIsLoading(true);
            return fetchPostSingleTask(getIdTokenClaims, values, user?.id);
        },
        onError: (err) => {
            console.error(err);
        },
        onSettled: () => {
            currentQueryClient.invalidateQueries(['allTasks', user?.id]);
            setIsLoading(false);
        },
    });

    return {
        postSingleTask: mutateAsync,
        isLoadingPostTask: isLoading,
        isError,
    };
};

// update single task
const fetchPutSingleTask = async (
    getIdTokenClaims: any,
    taskValues: Partial<TypeAddTaskForm>,
    userId?: string,
    taskId?: string
) => {
    const idToken = await getIdTokenClaims();

    if (!idToken || !userId || !taskId) return null;

    const endpoint = TASKS_ENDPOINTS.PUT_SINGLE_TASKS(userId, taskId);

    const response = await putDataWithToken(
        endpoint,
        taskValues,
        idToken?.__raw
    );

    return responsePutTaskSchema.parse(response);
};
export const usePutSingleTask = () => {
    const { setIsLoading, user } = useAppStore();
    const { getIdTokenClaims } = useAuth0();
    const currentQueryClient = useQueryClient();

    const { mutateAsync, isLoading, isError } = useMutation({
        mutationKey: ['editSingleTask'],
        mutationFn: (values: TypeEditTaskForm) => {
            const { taskId, ...taskToUpdate } = values;
            setIsLoading(true);
            return fetchPutSingleTask(
                getIdTokenClaims,
                taskToUpdate,
                user?.id,
                taskId
            );
        },
        onError: (err) => {
            console.error(err);
        },
        onSettled: () => {
            currentQueryClient.invalidateQueries(['allTasks', user?.id]);
            setIsLoading(false);
        },
    });

    return {
        putSingleTask: mutateAsync,
        isLoadingPutTask: isLoading,
        isError,
    };
};
