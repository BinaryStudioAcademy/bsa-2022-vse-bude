import type { RootState } from 'store/store';

export const getUser = (state: RootState) => state.auth.user;
export const getAuthError = (state: RootState) => state.auth.error;
