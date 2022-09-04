import { reducer as auth } from './auth/reducer';
import { reducer as personalInfo } from './personal-info/reducer';
import { reducer as products } from './products/reducer';

const rootReducer = {
  auth,
  personalInfo,
  products,
};

export { rootReducer };
