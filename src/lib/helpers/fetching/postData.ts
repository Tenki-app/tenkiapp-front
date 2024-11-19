import { AxiosResponse } from 'axios';

import { api } from '@/lib/utils/axios';

export const postDataWithAuth = async (
	endpoint: string,
	values: Record<string, any>,
	token: string
): Promise<any> => {
	const headers = {
		Authorization: `Bearer ${token}`,
	};

	return api
		.post(endpoint, values, { headers })
		.then((res: AxiosResponse) => {
			return res.data;
		})
		.catch((error: unknown) => {
			console.error(error);
			throw error;
		});
};
