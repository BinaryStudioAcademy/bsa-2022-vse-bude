import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig, ProductRequestDto } from '~/common/types/types';
import { AllProductsDto } from '@vse-bude/shared';
import { ActionType } from './common';

const loadProducts = createAsyncThunk<
  AllProductsDto,
  ProductRequestDto,
  AsyncThunkConfig
>(ActionType.PRODUCTS_FETCH, async (requestParams, { extra }) => {
  const { productApi } = extra;

  return productApi.getProducts(requestParams);
});

export { loadProducts };
