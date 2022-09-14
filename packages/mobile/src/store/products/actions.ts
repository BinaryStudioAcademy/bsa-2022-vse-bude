import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
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
>(
  ActionType.ADD_TO_FAVORITE,
  async (productId, { extra, getState, dispatch }) => {
    const { productApi } = extra;
    const user = getState().auth.user;
    if (user) {
      const response = await productApi.addToFavorites({ productId });
      await dispatch(fetchFavoriteIds());

      return response;
    }

    return { productId };
  },
);

const deleteFromFavorite = createAsyncThunk<
  ProductIdRequest,
  string,
  AsyncThunkConfig
>(
  ActionType.DELETE_FROM_FAVORITE,
  async (productId, { extra, getState, dispatch }) => {
    const { productApi } = extra;
    const user = getState().auth.user;
    if (user) {
      const response = await productApi.deleteFromFavorites({ productId });
      await dispatch(fetchFavoriteIds());

      return response;
    }

    return { productId };
  },
);

const cleanFavoriteIds = createAction(ActionType.CLEAN_FAVORITES_IDS);

export {
  loadProducts,
  fetchFavorites,
  fetchFavoriteIds,
  addToFavorite,
  deleteFromFavorite,
  cleanFavoriteIds,
};
