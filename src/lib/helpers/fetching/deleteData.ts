import { AxiosResponse } from 'axios';
import { api } from '@/lib/utils/axios';

export const deleteData = async (endpoint: string): Promise<any> => {
	return api
		.delete(endpoint)
		.then((res: AxiosResponse) => {
			return res.data;
		})
		.catch((error: unknown) => {
			console.error(error);
			throw error;
		});
};

export const deleteDataWithToken = async (
	endpoint: string,
	token: string
): Promise<any> => {
	const headers = {
		Authorization: `Bearer ${token}`,
	};

	return api
		.delete(endpoint, { headers })
		.then((res: AxiosResponse) => {
			return res.data;
		})
		.catch((error: unknown) => {
			console.error(error);

			throw error;
		});
};
