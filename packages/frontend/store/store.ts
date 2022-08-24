import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { authReducer } from './auth';
import { categoryReducer } from './category';
import { productReducer } from './product';

const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      category: categoryReducer,
      product: productReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore);
