import { RootState } from '~/common/types/types';
import { createSelector } from '@reduxjs/toolkit';

const selectProductById = createSelector(
  (state: RootState) => state.products.products,
  (state: RootState, productId: string) => productId,

  (products, productId) => products.find((item) => item.id === productId),
);

export { selectProductById };
