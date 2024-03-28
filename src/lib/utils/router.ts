export const USER_ENDPOINTS = {
    SIGN_IN: '/api/sign_in',
};

export const TASKS_ENDPOINTS = {
    POST_SINGLE_TASK: (userId: string) => `/api/tasks/user/${userId}`,
    GET_ALL_TASKS: (userId: string) => `/api/tasks/user/${userId}`,
    PUT_SINGLE_TASKS: (userId: string, taskId: string) =>
        `/api/tasks/${taskId}/user/${userId}`,
    GET_ALL_TASKS_BY_CATEGORY: (userId: string, category: string) =>
        `/api/tasks/category/${category}/user/${userId}`,
};
