import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from '~/common/types/types';
import { CategoryResponseDto } from '@vse-bude/shared';
import { ActionType } from './common';

const loadAllCategories = createAsyncThunk<
  CategoryResponseDto[],
  undefined,
  AsyncThunkConfig
>(ActionType.CATEGORIES_FETCH, async (_, { extra }) => {
  const { categoryApi } = extra;

  return categoryApi.getAllCategories();
});

export { loadAllCategories };
