import type { AuthState } from 'store/auth';
import type { CategoryState } from 'store/category';
import type { ProductState } from 'store/product';
import type { ProfileState } from 'store/profile/reducer';
import type { FavoriteProductState } from 'store/favorite-product';
import type { ToastState } from 'store/toast/reducers';
import type { ProductAuctionState } from 'store/product-auction';

export interface RootState {
  auth: AuthState;
  profile: ProfileState;
  category: CategoryState;
  product: ProductState;
  favoriteProduct: FavoriteProductState;
  toast: ToastState;
  auction: ProductAuctionState;
}
