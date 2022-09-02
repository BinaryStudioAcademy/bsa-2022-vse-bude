import { createSelector } from '@reduxjs/toolkit';
import { ProductDto } from '@vse-bude/shared';
import { RootState } from '~/common/types/types';

const selectProducts = (state: RootState): ProductDto[] => {
  const products = state.products.products;

  return products as ProductDto[];
};

const selectProductById = createSelector(
  [selectProducts, (state: RootState, productId: string) => productId],

  (products: ProductDto[], productId: ProductDto['id']) => {
    const product = products.find((item) => item.id === productId);

    return product as ProductDto;
  },
);

export { selectProductById, selectProducts };
