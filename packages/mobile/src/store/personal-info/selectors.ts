import { RootState } from '~/common/types/types';

export const selectPersonalInfo = (state: RootState) => state.personalInfo.user;
