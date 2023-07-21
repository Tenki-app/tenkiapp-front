import axios from 'axios';

export const BASE_URL = 'http://localhost:3001';

export const api = axios.create({
    baseURL: BASE_URL,
});

export const basicApi = axios.create({
    baseURL: BASE_URL,
});

api.interceptors.request.use(
    (config) => {
        config.params = {
            ...config.params,
        };

        const accessToken = config.params?.accessToken;
        console.log('accessToken: ', accessToken);

        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
