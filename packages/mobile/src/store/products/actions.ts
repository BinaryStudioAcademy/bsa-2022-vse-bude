import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig, ProductRequestDto } from '~/common/types/types';
import { AllProductsDto, ProductDto } from '@vse-bude/shared';
import { ActionType } from './common';

const loadProducts = createAsyncThunk<
  AllProductsDto,
  ProductRequestDto,
  AsyncThunkConfig
>(ActionType.PRODUCTS_FETCH, async (requestParams, { extra }) => {
  const { productApi } = extra;

  return productApi.getProducts(requestParams);
});

const fetchFavorites = createAsyncThunk<
  ProductDto[],
  ProductRequestDto,
  AsyncThunkConfig
>(ActionType.FETCH_FAVORITES, async (requestParams, { extra }) => {
  const { productApi } = extra;

  return await productApi.getFavorites(requestParams);
});

const fetchFavoritesIds = createAsyncThunk<
  Array<string> | [],
  undefined,
  AsyncThunkConfig
>(ActionType.FETCH_FAVORITES_IDS, async (_, { extra }) => {
  const { productApi } = extra;

  return await productApi.getFavoritesIds();
});

export { loadProducts, fetchFavorites, fetchFavoritesIds };
