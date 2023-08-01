import { signIn, useSession } from 'next-auth/react';

import { APP_ENDPOINTS } from '@/lib/utils/router';
import { api } from '@/lib/utils/axios';
import { responseRefreshTokenSchema } from '@/lib/schema/userSchema';

const useRefreshToken = () => {
    const { data: session } = useSession();

    const refreshToken = async () => {
        const res = await api.get(APP_ENDPOINTS.REFRESH_TOKEN);
        const resData = responseRefreshTokenSchema.parse(res.data);
        if (session) {
            session.accessToken = resData.accessToken;
        } else {
            signIn();
        }
    };

    return refreshToken;
};

export { useRefreshToken };
