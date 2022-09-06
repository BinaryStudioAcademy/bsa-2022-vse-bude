import { reducer as auth } from './auth/reducer';
import { reducer as products } from './products/reducer';
import { reducer as verifyPhone } from './verify-phone/reducer';

const rootReducer = {
  auth,
  products,
  verifyPhone,
};

export { rootReducer };
