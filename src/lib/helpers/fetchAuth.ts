import { api } from '../utils/axios';
import { APP_ENDPOINTS } from '../utils/router';

type typeSignInValues = {
    username: string;
    password: string;
};

export const fetchPostSignIn = async (signInValues: typeSignInValues) => {
    return api
        .post(APP_ENDPOINTS.SIGN_IN, signInValues)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
};
