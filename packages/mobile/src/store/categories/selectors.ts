import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '~/common/types/types';

const selectCategories = (state: RootState) => {
  return state.categories.categories;
};

const selectCategoriesDataStatus = (state: RootState) => {
  return state.categories.dataStatus;
};

const selectCategoriesNonEmpty = createSelector(
  [selectCategories],
  (categories) =>
    categories.filter((category) => Number(category.productsCount) > 0),
);

const selectCategoryById = createSelector(
  [selectCategories, (_: RootState, categoryId: string) => categoryId],
  (categories, categoryId) => {
    const category = categories.find((item) => item.id === categoryId);

    return category ?? null;
  },
);

export {
  selectCategories,
  selectCategoryById,
  selectCategoriesDataStatus,
  selectCategoriesNonEmpty,
};
