import { z } from 'zod';

import { userSchema } from '../schema/userSchema';

export type TypeUser = z.infer<typeof userSchema>;

export type TypeFormLogin = {
    username: string;
    password: string;
};
