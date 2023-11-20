import { z } from 'zod';

import { userSchema, userSignInSchema } from '../schema/userSchema';

export type TypeUser = z.infer<typeof userSchema>;

export type TypeUserSignInPostParams = z.infer<typeof userSignInSchema>;
