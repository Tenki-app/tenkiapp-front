import { useSession } from 'next-auth/react';

import { api } from '@/lib/utils/axios';

const useRefreshToken = () => {
    const { data: session } = useSession();

    const refreshToken = async () => {
        const res = await api.get('/auth/refresh');
    };

    return refreshToken;
};

export { useRefreshToken };
