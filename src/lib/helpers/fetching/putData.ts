import { AxiosResponse } from 'axios';
import { api } from '@/lib/utils/axios';

export const putData = async (
	endpoint: string,
	values: Record<string, unknown>
): Promise<any> => {
	return api
		.put(endpoint, values)
		.then((res: AxiosResponse) => {
			return res.data;
		})
		.catch((error: unknown) => {
			console.error(error);

			throw error;
		});
};

export const putDataWithToken = async (
	endpoint: string,
	values: Record<string, unknown>,
	token: string
): Promise<any> => {
	const headers = {
		Authorization: `Bearer ${token}`,
	};

	return api
		.put(endpoint, values, { headers })
		.then((res: AxiosResponse) => {
			return res.data;
		})
		.catch((error: unknown) => {
			console.error(error);

			throw error;
		});
};
