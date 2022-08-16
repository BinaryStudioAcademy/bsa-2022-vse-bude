import type { RootState } from '@types';

export const getUserSelector = (state: RootState) => state.auth.currentUser;
export const getAuthErrorSelector = (state: RootState) => state.auth.error;
