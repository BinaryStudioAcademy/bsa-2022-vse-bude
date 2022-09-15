import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from '~/common/types/types';
import { ProductDto, ProductQuery } from '@vse-bude/shared';
import { ActionType } from './common';

const loadProducts = createAsyncThunk<
  ProductDto[],
  ProductQuery & Record<string, unknown>,
  AsyncThunkConfig
>(ActionType.PRODUCTS_FETCH, async (requestParams, { extra }) => {
  const { productApi } = extra;

  return productApi.getProducts(requestParams);
});

export { loadProducts };
