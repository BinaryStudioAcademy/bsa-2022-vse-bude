import { RootState } from '~/common/types/types';

const selectVerifyPhoneDataStatus = (state: RootState) =>
  state.verifyPhone.dataStatus;

export { selectVerifyPhoneDataStatus };
