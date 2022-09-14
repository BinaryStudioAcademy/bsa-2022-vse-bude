import { RootState } from '~/common/types/types';

const selectVerifyDataStatus = (state: RootState) => state.verify.dataStatus;

export { selectVerifyDataStatus };
