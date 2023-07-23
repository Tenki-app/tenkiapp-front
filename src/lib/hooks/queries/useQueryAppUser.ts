import { useMutation, QueryClient, useQuery } from '@tanstack/react-query';

import { USER_ENDPOINTS } from '../../utils/router';
import { postBasicData } from '../../helpers/postData';
import { useAppStore } from '../../store/store';
import { TypeFormLogin } from '../../types/user';
import { responseUserLoginSchema } from '../../schema/userSchema';

const queryClient = new QueryClient();

//SIGN_IN
export const fetchPostSignIn = async (user: TypeFormLogin) => {
    if (!user) return null;
    const response = await postBasicData(USER_ENDPOINTS.SIGN_IN, user);
    return response;
};
