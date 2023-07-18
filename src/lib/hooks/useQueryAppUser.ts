import { useMutation, QueryClient, useQuery } from '@tanstack/react-query';

import { USER_ENDPOINTS } from '../utils/router';
import { postBasicData } from '../helpers/postData';
import { useAppStore } from '../store/store';
import { TypeFormLogin } from '../types/user';
import { responseUserLoginSchema } from '../schema/userSchema';

const queryClient = new QueryClient();

//SIGN_IN
export const fetchPostSignIn = async (user: TypeFormLogin) => {
    if (!user) return null;
    const response = await postBasicData(USER_ENDPOINTS.SIGN_IN, user);
    return responseUserLoginSchema.parse(response);
};
export const usePostSingInUserQuery = () => {
    const { setUser } = useAppStore();
    return useMutation({
        mutationFn: (user: TypeFormLogin) => fetchPostSignIn(user),
        onSuccess: (data) => {
            if (data) {
                localStorage.setItem('accessToken', data.accessToken);
                setUser(data.user);
            }
        },
        onError: (err) => {
            console.error(err);
        },
    });
};
