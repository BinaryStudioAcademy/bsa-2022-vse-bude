import { RootState } from '~/common/types/types';
import { createSelector } from '@reduxjs/toolkit';
import { ProductDto } from '@vse-bude/shared';

const selectProducts = (state: RootState) => state.products.products;

const selectProductById = createSelector(
  [selectProducts, (state: RootState, productId: string) => productId],

  (products, productId) =>
    products.find((item: ProductDto) => item.id === productId),
);

export { selectProductById, selectProducts };
