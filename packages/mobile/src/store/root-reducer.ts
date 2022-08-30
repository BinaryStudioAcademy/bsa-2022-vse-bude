import { reducer as auth } from './auth/reducer';
import { reducer as personalInfo } from './personal-info/reducer';

const rootReducer = {
  auth,
  personalInfo,
};

export { rootReducer };
