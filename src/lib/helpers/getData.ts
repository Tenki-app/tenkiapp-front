import { api } from '../utils/axios';
import { AxiosResponse } from 'axios';

export const getData = async (
    endpoint: string,
    accessToken: string
): Promise<any> => {
    return api
        .get(endpoint, { params: { accessToken: accessToken } })
        .then((res: AxiosResponse) => {
            return res.data;
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });
};
