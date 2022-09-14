import { createSelector } from '@reduxjs/toolkit';
import { ProductDto, AllProductsDto, ProductType } from '@vse-bude/shared';
import { RootState } from '~/common/types/types';

const selectProducts = (state: RootState): AllProductsDto => {
  return state.products.products;
};

const selectProductById = createSelector(
  [selectProducts, (state: RootState, productId: string) => productId],

  (products: AllProductsDto, productId: ProductDto['id']) => {
    const product = products.items.find((item) => item.id === productId);

    return product as ProductDto;
  },
);

const selectProductsByType = createSelector(
  [selectProducts, (state: RootState, productType: ProductType) => productType],
  (products, type) => products.items.filter((item) => item.type === type),
);

export { selectProductById, selectProducts, selectProductsByType };
