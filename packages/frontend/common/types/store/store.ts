import type { AuthState } from 'store/auth';
import type { CategoryState } from 'store/category';
import type { ProductState } from 'store/product';
import type { ProfileState } from 'store/profile/reducer';
import type { FavoriteProductState } from 'store/favorite-product';
import type { VerifyState } from 'store/verify/reducer';

export interface RootState {
  auth: AuthState;
  profile: ProfileState;
  category: CategoryState;
  product: ProductState;
  favoriteProduct: FavoriteProductState;
  verify: VerifyState;
}
