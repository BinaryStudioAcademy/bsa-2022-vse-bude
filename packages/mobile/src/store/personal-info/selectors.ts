import { RootState } from '~/common/types/types';

const selectPersonalInfo = (state: RootState) => state.personalInfo.user;
const selectDataStatusPersonalInfo = (state: RootState) =>
  state.personalInfo.dataStatus;

export { selectPersonalInfo, selectDataStatusPersonalInfo };
