import {
  createAction,
  createAsyncThunk,
  PrepareAction,
} from '@reduxjs/toolkit';
import {
  AsyncThunkConfig,
  FavoriteResponseDto,
  ProductRequestDto,
} from '~/common/types/types';
import {
  AuctionPermissionsResponse,
  Bid,
  CreateBidRequest,
  AllProductsDto,
  UpdateProductPriceEvent,
  ProductDto,
  ProductIdRequest,
} from '@vse-bude/shared';
import { ActionType } from './common';

const loadProducts = createAsyncThunk<
  AllProductsDto,
  ProductRequestDto,
  AsyncThunkConfig
>(ActionType.PRODUCTS_FETCH, async (requestParams, { extra }) => {
  const { productApi } = extra;

  return productApi.getProducts(requestParams);
});

const loadPopularProducts = createAsyncThunk<
  ProductDto[],
  ProductRequestDto,
  AsyncThunkConfig
>(ActionType.POPULAR_PRODUCTS_FETCH, async (requestParams, { extra }) => {
  const { productApi } = extra;

  return productApi.getPopularProducts(requestParams);
});

const loadPopularLots = createAsyncThunk<
  ProductDto[],
  ProductRequestDto,
  AsyncThunkConfig
>(ActionType.POPULAR_LOTS_FETCH, async (requestParams, { extra }) => {
  const { productApi } = extra;

  return productApi.getPopularLots(requestParams);
});

const loadProductInfo = createAsyncThunk<ProductDto, string, AsyncThunkConfig>(
  ActionType.PRODUCT_FETCH_INFO,
  async (productId, { extra }) => {
    const { productApi } = extra;
    const response = await productApi.getProductById(productId);

    return response;
  },
);

const auctionPermissions = createAsyncThunk<
  AuctionPermissionsResponse,
  string,
  AsyncThunkConfig
>(ActionType.AUCTION_PERMISSIONS, async (productId, { extra }) => {
  const { productApi } = extra;
  const response = await productApi.fetchAuctionPermissions(productId);

  return response;
});

const auctionMakeBid = createAsyncThunk<
  Bid,
  CreateBidRequest,
  AsyncThunkConfig
>(ActionType.PLACE_BID, async (data, { extra }) => {
  const { productApi } = extra;
  const result = await productApi.placeBid(data);

  return result;
});

const auctionLeaveAction = createAsyncThunk<
  ProductDto,
  string,
  AsyncThunkConfig
>(ActionType.AUCTION_LEAVE, async (productId, { extra }) => {
  const { productApi } = extra;
  const result = await productApi.leaveAuction(productId);

  return result;
});

const updateCurrentItemPrice = createAction<
  PrepareAction<UpdateProductPriceEvent>
>(ActionType.UPDATE_CURRENT_ITEM_PRICE, (payload) => {
  return { payload };
});

const updateProductViews = createAsyncThunk<
  ProductDto,
  string,
  AsyncThunkConfig
>(ActionType.INCREMENT_PRODUCT_VIEWS, async (productId, { extra }) => {
  const { productApi } = extra;
  const response = await productApi.incrementProductViews(productId);

  return response;
});

const fetchFavorites = createAsyncThunk<
  FavoriteResponseDto[],
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
      await dispatch(fetchFavorites({ limit: 10 }));

      return response;
    }

    return { productId };
  },
);

const fetchGuestFavorites = createAsyncThunk<
  ProductDto,
  string,
  AsyncThunkConfig
>(ActionType.FETCH_GUEST_FAVORITES, async (productId, { extra }) => {
  const { productApi } = extra;

  return await productApi.getProductById(productId);
});

const cleanFavoriteIds = createAction(ActionType.CLEAN_FAVORITES_IDS);

export {
  loadProducts,
  loadPopularProducts,
  loadPopularLots,
  loadProductInfo,
  auctionPermissions,
  auctionMakeBid,
  auctionLeaveAction,
  updateCurrentItemPrice,
  updateProductViews,
  fetchFavorites,
  fetchFavoriteIds,
  addToFavorite,
  deleteFromFavorite,
  cleanFavoriteIds,
  fetchGuestFavorites,
};
