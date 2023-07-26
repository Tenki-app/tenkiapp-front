import { signIn, useSession } from 'next-auth/react';

import { APP_ENDPOINTS } from '@/lib/utils/router';
import { api } from '@/lib/utils/axios';
import { responseRefreshTokenSchema } from '@/lib/schema/userSchema';

const useRefreshToken = () => {
    const { data: session } = useSession();

    const refreshToken = async () => {
        const response = await responseRefreshTokenSchema.parse(
            api.get(APP_ENDPOINTS.REFRESH_TOKEN)
        );

        if (session && response.accessToken) {
            session.accessToken = response.accessToken;
        } else {
            signIn();
        }
    };

    return refreshToken;
};

export { useRefreshToken };
