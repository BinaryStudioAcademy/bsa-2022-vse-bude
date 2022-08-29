import type { AuthState } from 'store/auth';
import type { CategoryState } from 'store/category';
import type { ProductState } from 'store/product';
import type { FavoriteProductState } from 'store/favorite-product';

export interface RootState {
  auth: AuthState;
  category: CategoryState;
  product: ProductState;
  favoriteProduct: FavoriteProductState;
}
