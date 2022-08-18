import { RootState } from '~/common/types/types';

export const getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
