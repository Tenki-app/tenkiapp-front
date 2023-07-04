import { useRouter } from 'next/router';
import { useAppStore } from '../../lib/store/store';
import type { ReactNode } from 'react';

type typeUseProtectedRoute = {
    children: JSX.Element;
};

const ProtectedRoute = ({ children }: typeUseProtectedRoute): JSX.Element => {
    const { user } = useAppStore();
    const router = useRouter();

    const isAuthenticate = user && localStorage.getItem('accessToken');

    const validateAuthentication = () => {
        if (isAuthenticate) {
            return <>{children}</>;
        } else {
            router.push('/');
            return <></>;
        }
    };

    return validateAuthentication();
};

export { ProtectedRoute };
