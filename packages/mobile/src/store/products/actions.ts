import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from '~/common/types/types';
import { ProductDto } from '@vse-bude/shared';
import { ActionType } from './common';

const loadAllProducts = createAsyncThunk<
  ProductDto[],
  undefined,
  AsyncThunkConfig
>(ActionType.PRODUCTS_FETCH, async (_, { extra }) => {
  const { productApi } = extra;

  return productApi.getAllProducts();
});

export { loadAllProducts };
