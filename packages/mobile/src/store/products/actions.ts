import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig, ProductRequestDto } from '~/common/types/types';
import { ProductDto } from '@vse-bude/shared';
import { ActionType } from './common';

const loadProducts = createAsyncThunk<
  ProductDto[],
  ProductRequestDto,
  AsyncThunkConfig
>(ActionType.PRODUCTS_FETCH, async (requestParams, { extra }) => {
  const { productApi } = extra;

  return productApi.getProducts(requestParams);
});

export { loadProducts };
