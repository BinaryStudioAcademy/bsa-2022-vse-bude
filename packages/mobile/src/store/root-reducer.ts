import { reducer as auth } from './auth/reducer';
import { reducer as products } from './products/reducer';

const rootReducer = {
  auth,
  products,
};

export { rootReducer };
