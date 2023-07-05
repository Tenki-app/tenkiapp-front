import { useRouter } from 'next/router';
import { useAppStore } from '../../lib/store/store';
import { useEffect } from 'react';

type typeUseProtectedRoute = {
    children: JSX.Element;
};

const ProtectedRoute = ({ children }: typeUseProtectedRoute): JSX.Element => {
    const { user } = useAppStore();
    const router = useRouter();

    const isAuthenticate = user && localStorage.getItem('accessToken');

    useEffect(() => {
        if (!isAuthenticate) {
            router.push('/login');
        }
        // eslint-disable-next-line
    }, []);

    return isAuthenticate ? children : <></>;
};

export { ProtectedRoute };
