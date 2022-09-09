import { RootState } from '~/common/types/types';

const selectCurrentUser = (state: RootState) => state.auth.user;

const selectUserPhone = (state: RootState) => state.auth.user?.phone;

const selectAuthDataStatus = (state: RootState) => state.auth.dataStatus;

export { selectCurrentUser, selectUserPhone, selectAuthDataStatus };
