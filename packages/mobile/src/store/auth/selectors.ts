import { RootState } from '~/common/types/types';

export const selectCurrentUser = (state: RootState) => state.auth.user;

export const selectUserActionDataStatus = (state: RootState) =>
  state.auth.dataStatus;
