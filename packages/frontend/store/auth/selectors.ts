import type { RootState } from '@types';

export const getAuthErrorSelector = (state: RootState) => state.auth.error;
export const IsVerificatedSelector = (state: RootState) =>
  state.auth.user?.emailVerified && state.auth.user?.phoneVerified;
