import type { RootState } from '@types';

export const getUser = (state: RootState) => state.auth.currentUser;
export const getAuthError = (state: RootState) => state.auth.error;
