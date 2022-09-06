import { RootState } from '~/common/types/types';

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectPhoneVerified = (state: RootState) =>
  state.auth.user?.phoneVerified;
export const selectUserPhone = (state: RootState) => state.auth.user?.phone;
export const selectAuthDataStatus = (state: RootState) => state.auth.dataStatus;
export const selectVerifyPhoneDataStatus = (state: RootState) =>
  state.verifyPhone.dataStatus;
