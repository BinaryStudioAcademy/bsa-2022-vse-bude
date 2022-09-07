import { createSelector } from '@reduxjs/toolkit';
import { ProductDto, ProductType, CategoryDto } from '@vse-bude/shared';
import { RootState } from '~/common/types/types';

const selectCurrentUser = (state: RootState) => state.auth.user;

const selectPhoneVerified = (state: RootState) =>
  state.auth.user?.phoneVerified;

const selectUserPhone = (state: RootState) => state.auth.user?.phone;

const selectAuthDataStatus = (state: RootState) => state.auth.dataStatus;

const selectVerifyPhoneDataStatus = (state: RootState) =>
  state.verifyPhone.dataStatus;

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

const selectProductsByType = createSelector(
  [selectProducts, (state: RootState, productType: ProductType) => productType],
  (products, type) => products.filter((item) => item.type === type),
);

const selectCategories = (state: RootState): CategoryDto[] => {
  const categories = state.categories.categories;

  return categories as CategoryDto[];
};

const selectCategoryById = createSelector(
  [selectCategories, (state: RootState, categoryId: string) => categoryId],

  (categories: CategoryDto[], categoryId: CategoryDto['id']) => {
    const category = categories.find((item) => item.id === categoryId);

    return category as CategoryDto;
  },
);

export {
  selectCurrentUser,
  selectPhoneVerified,
  selectUserPhone,
  selectAuthDataStatus,
  selectVerifyPhoneDataStatus,
  selectProducts,
  selectProductById,
  selectProductsByType,
  selectCategories,
  selectCategoryById,
};
