import { reducer as auth } from './auth/reducer';
import { reducer as products } from './products/reducer';
import { reducer as categories } from './categories/reducer';
import { reducer as product } from './product/reducer';

const rootReducer = {
  auth,
  products,
  categories,
  product,
};

export { rootReducer };
