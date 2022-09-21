import { createSelector } from '@reduxjs/toolkit';
import { CategoryDto } from '@vse-bude/shared';
import { RootState } from '~/common/types/types';

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

const selectCategoriesDataStatus = (state: RootState) => {
  return state.categories.dataStatus;
};

export { selectCategories, selectCategoryById, selectCategoriesDataStatus };
