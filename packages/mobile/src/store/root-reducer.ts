import { reducer as auth } from './auth/reducer';
import { reducer as products } from './products/reducer';
import { reducer as verifyPhone } from './verify-phone/reducer';
import { reducer as categories } from './categories/reducer';

const rootReducer = {
  auth,
  products,
  verifyPhone,
  categories,
};

export { rootReducer };
