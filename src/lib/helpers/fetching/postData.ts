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
			if (res.status === 200 || res.status === 201) {
				return res.data;
			}
		})
		.catch((error: unknown) => {
			console.error(error);
			throw error;
		});
};
