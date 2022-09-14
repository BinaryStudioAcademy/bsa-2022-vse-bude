import {
  createAsyncThunk,
  createAction,
  PrepareAction,
} from '@reduxjs/toolkit';
import { AllProductsDto, ProductDto, ProductIdRequest } from '@vse-bude/shared';
import { AsyncThunkConfig, ProductRequestDto } from '~/common/types/types';
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

const fetchFavoriteIds = createAsyncThunk<
  string[],
  undefined,
  AsyncThunkConfig
>(ActionType.FETCH_FAVORITES_IDS, async (_, { extra }) => {
  const { productApi } = extra;

  return await productApi.getFavoritesIds();
});

const addToFavorite = createAsyncThunk<
  ProductIdRequest,
  string,
  AsyncThunkConfig
>(ActionType.ADD_TO_FAVORITE, async (productId, { extra }) => {
  const { productApi } = extra;

  return await productApi.uploadToFavorites({ productId });
});

const deleteFromFavorite = createAsyncThunk<
  ProductIdRequest,
  string,
  AsyncThunkConfig
>(ActionType.DELETE_FROM_FAVORITE, async (productId, { extra }) => {
  const { productApi } = extra;

  return await productApi.deleteFromFavorites({ productId });
});

const addToFavoriteGuestUser = createAction<PrepareAction<string>, string>(
  ActionType.ADD_TO_FAVORITE,
  (productId) => {
    return { payload: productId };
  },
);

const deleteFromFavoriteGuestUser = createAction<PrepareAction<string>, string>(
  ActionType.DELETE_FROM_FAVORITE,
  (productId) => {
    return { payload: productId };
  },
);

const cleanFavoriteIds = createAction<PrepareAction<[]>, string>(
  ActionType.CLEAN_FAVORITES_IDS,
  () => {
    return { payload: [] };
  },
);

export {
  loadProducts,
  fetchFavorites,
  fetchFavoriteIds,
  addToFavorite,
  deleteFromFavorite,
  addToFavoriteGuestUser,
  deleteFromFavoriteGuestUser,
  cleanFavoriteIds,
};
