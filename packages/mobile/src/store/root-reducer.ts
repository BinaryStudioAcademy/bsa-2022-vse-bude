import { reducer as auth } from './auth/reducer';
import { reducer as products } from './products/reducer';
import { reducer as categories } from './categories/reducer';

const rootReducer = {
  auth,
  products,
  categories,
};

export { rootReducer };
