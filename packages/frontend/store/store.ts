import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { authReducer } from './auth';
import { categoryReducer } from './category';
import { productReducer } from './product';
import { favoriteProductReducer } from './favorite-product';
import { profileReducer } from './profile/reducer';
import { verifyModalReducer } from './verify/reducer';
import { toastReducer } from './toast/reducers';

const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      profile: profileReducer,
      category: categoryReducer,
      product: productReducer,
      toast: toastReducer,
      favoriteProduct: favoriteProductReducer,
      verify: verifyModalReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore);
