import { useAuth0 } from '@auth0/auth0-react';

import { USER_ENDPOINTS } from '@/lib/utils/router';
import { postDataWithAuth } from '@/lib/helpers/fetching/postData';
import { useAppStore } from '@/lib/store/store';
import { QueryClient, useMutation } from '@tanstack/react-query';

import type { TypeUserSignInPostParams } from '@/lib/types/user';
import { userPostSignInResponseSchema } from '@/lib/schema/userSchema';

const queryClient = new QueryClient();

// SIGN IN USER
const fetchPostSignInUser = async (
	user: Partial<TypeUserSignInPostParams>,
	getIdTokenClaims: any
) => {
	const idToken = await getIdTokenClaims();

	if (!user || !idToken) return null;

	const endpoint = USER_ENDPOINTS.SIGN_IN;
	const response = await postDataWithAuth(endpoint, user, idToken.__raw);

	return response;
};
export const usePostSignInUser = () => {
	const { getIdTokenClaims } = useAuth0();
	const { setUser } = useAppStore();

	return useMutation({
		mutationFn: (user: Partial<TypeUserSignInPostParams>) =>
			fetchPostSignInUser(user, getIdTokenClaims),
		onSuccess: (data) => {
			setUser(data?.user ?? null);
		},
		onError: (err) => {
			console.error(err);
		},
	});
};
