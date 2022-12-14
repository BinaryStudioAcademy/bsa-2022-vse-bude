import { reducer as auth } from './auth/reducer';
import { reducer as personalInfo } from './personal-info/reducer';
import { reducer as products } from './products/reducer';
import { reducer as verify } from './verify/reducer';
import { reducer as categories } from './categories/reducer';
import { reducer as filters } from './filters/reducer';

const rootReducer = {
  auth,
  personalInfo,
  products,
  verify,
  categories,
  filters,
};

export { rootReducer };
