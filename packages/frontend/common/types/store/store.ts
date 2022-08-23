import type { ProfileState } from 'store/profile';
import type { AuthState } from 'store/auth';
import type { CategoryState } from 'store/category';
import type { ProductState } from 'store/product';

export interface RootState {
  profile: ProfileState;
  auth: AuthState;
  category: CategoryState;
  product: ProductState;
}
