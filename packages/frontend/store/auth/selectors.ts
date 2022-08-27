import type { RootState } from '@types';

export const getAuthErrorSelector = (state: RootState) => state.auth.error;
