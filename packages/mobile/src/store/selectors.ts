import { RootState } from '~/common/types/types';

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectUserId = (state: RootState) => state.auth.user?.id;
export const selectPersonalInfo = (state: RootState) => state.personalInfo.user;
export const selectDataStatusPersonalInfo = (state: RootState) =>
  state.personalInfo.dataStatus;
