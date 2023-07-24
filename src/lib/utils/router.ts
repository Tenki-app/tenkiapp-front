export const APP_ENDPOINTS = {
    SIGN_IN: '/auth/login',
    REFRESH_TOKEN: '/auth/refresh',
};

export const TASKS_ENDPOINTS = {
    POST_SINGLE_TASK: (userId: string) => `/api/tasks/${userId}`,
    GET_ALL_TASKS: (userId: string) => `/api/tasks/${userId}`,
};
