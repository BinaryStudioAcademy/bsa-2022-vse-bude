import type { AuthState } from 'store/auth';
import type { CategoryState } from 'store/category';
import type { ProductState } from 'store/product';
import type { ProfileState } from 'store/profile/reducer';
import type { FavoriteProductState } from 'store/favorite-product';
import type { ModalsState } from 'store/modals/reducer';
import type { ToastState } from 'store/toast/reducers';
import type { MyListState } from 'store/my-list/reducer';
import type { CheckoutState } from 'store/checkout';

export interface RootState {
  auth: AuthState;
  profile: ProfileState;
  category: CategoryState;
  product: ProductState;
  favoriteProduct: FavoriteProductState;
  modals: ModalsState;
  toast: ToastState;
  myList: MyListState;
  checkout: CheckoutState;
}
