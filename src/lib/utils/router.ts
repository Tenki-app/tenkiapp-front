export const USER_ENDPOINTS = {
    SIGN_IN: '/auth/login',
};

export const TASKS_ENDPOINTS = {
    POST_SINGLE_TASK: (userId: string) => `/api/tasks/${userId}`,
    GET_ALL_TASKS: (userId: string) => `/api/tasks/${userId}`,
};
