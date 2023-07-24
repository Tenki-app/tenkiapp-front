import { AxiosResponse } from 'axios';
import { api } from '../utils/axios';

export const postData = async (
    endpoint: string,
    values: Record<string, any>,
    accessToken: string
): Promise<any> => {
    return api
        .post(endpoint, values, { params: { accessToken: accessToken } })
        .then((res: AxiosResponse) => {
            return res.data;
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });
};

export const postBasicData = async (
    endpoint: string,
    values: Record<string, any>
): Promise<any> => {
    return api
        .post(endpoint, values)
        .then((res: AxiosResponse) => {
            return res.data;
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });
};
