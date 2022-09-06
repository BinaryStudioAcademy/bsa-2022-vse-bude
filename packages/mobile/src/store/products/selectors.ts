import { createSelector } from '@reduxjs/toolkit';
import { ProductDto, ProductType } from '@vse-bude/shared';
import { RootState } from '~/common/types/types';

const selectProducts = (state: RootState): ProductDto[] => {
  return state.products.products;
};

const selectProductById = createSelector(
  [selectProducts, (state: RootState, productId: string) => productId],

  (products: ProductDto[], productId: ProductDto['id']) => {
    const product = products.find((item) => item.id === productId);

    return product as ProductDto;
  },
);

const selectAuctionProducts = (state: RootState): ProductDto[] => {
  return state.products.products.filter(
    (item) => item.type === ProductType.AUCTION,
  );
};

const selectSellingProducts = (state: RootState): ProductDto[] => {
  return state.products.products.filter(
    (item) => item.type === ProductType.SELLING,
  );
};

export {
  selectProductById,
  selectProducts,
  selectAuctionProducts,
  selectSellingProducts,
};
