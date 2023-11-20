import { USER_ENDPOINTS } from '@/lib/utils/router';

import type { TypeUserSignInPostParams } from '@/lib/types/user';

const fetchPostSignInUser = (user: TypeUserSignInPostParams) => {
	if (!user) return null;

	const endpoint = USER_ENDPOINTS.SIGN_IN;
};
