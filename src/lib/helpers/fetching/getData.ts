import { AxiosError, AxiosResponse } from 'axios';
import { api } from '@/lib/utils/axios';

export const getData = async (endpoint: string): Promise<any> => {
	return api
		.get(endpoint)
		.then((res: AxiosResponse) => {
			return res.data;
		})
		.catch((error: unknown) => {
			console.error(error);
			throw error;
		});
};

export const getDataWithAuth = async (
	endpoint: string,
	token: string
): Promise<any> => {
	const headers = {
		Authorization: `Bearer ${token}`,
	};

	return api
		.get(endpoint, { headers })
		.then((res: AxiosResponse) => {
			return res.data;
		})
		.catch((error: unknown) => {
			console.error(error);
			throw error;
		});
};
