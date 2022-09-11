import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig, ProductRequestDto } from '~/common/types/types';
import { ProductDto, ItemDto } from '@vse-bude/shared';
import { ActionType } from './common';

const loadProducts = createAsyncThunk<
  ProductDto[],
  ProductRequestDto,
  AsyncThunkConfig
>(ActionType.PRODUCTS_FETCH, async (requestParams, { extra }) => {
  const { productApi } = extra;

  return productApi.getProducts(requestParams);
});

const loadProductInfo = createAsyncThunk<ItemDto, string, AsyncThunkConfig>(
  ActionType.FETCH_PRODUCT_INFO,
  async (productId, { extra }) => {
    const { productApi } = extra;

    return await productApi.getProductById(productId);
  },
);

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

export { loadProducts, loadProductInfo, fetchFavorites, fetchFavoritesIds };
