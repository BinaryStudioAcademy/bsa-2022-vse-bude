import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig, ProductQuery } from '~/common/types/types';
import { ProductDto } from '@vse-bude/shared';
import { ActionType } from './common';

const loadProducts = createAsyncThunk<
  ProductDto[],
  ProductQuery,
  AsyncThunkConfig
>(ActionType.PRODUCTS_FETCH, async ({ limit, type, categoryId }, { extra }) => {
  const { productApi } = extra;

  return productApi.getProducts({ limit, type, categoryId });
});

export { loadProducts };
