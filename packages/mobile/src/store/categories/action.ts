import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from '~/common/types/types';
import { CategoryDto } from '@vse-bude/shared';
import { ActionType } from './common';

const loadAllCategories = createAsyncThunk<
  CategoryDto[],
  undefined,
  AsyncThunkConfig
>(ActionType.CATEGORIES_FETCH, async (_, { extra }) => {
  const { categoryApi } = extra;

  return categoryApi.getAllCategories();
});

export { loadAllCategories };
