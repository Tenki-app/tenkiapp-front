import axios from 'axios';

export const BASE_URL = 'http://localhost:3001';

export const api = axios.create({
    baseURL: BASE_URL,
});

api.interceptors.request.use(
    (config) => {
        const accessToken =
            typeof window !== '' && localStorage.getItem('accessToken');

        config.headers['Authorization'] = `Bearer ${token}`;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
