import {
  createAction,
  createAsyncThunk,
  PrepareAction,
} from '@reduxjs/toolkit';
import { AsyncThunkConfig } from '~/common/types/types';
import {
  AuctionPermissionsResponse,
  Bid,
  CreateBidRequest,
  AllProductsDto,
  UpdateProductPriceEvent,
  ProductDto,
  ProductQuery,
} from '@vse-bude/shared';
import { ActionType } from './common';

const loadProducts = createAsyncThunk<
  AllProductsDto,
  ProductQuery & Record<string, unknown>,
  AsyncThunkConfig
>(ActionType.PRODUCTS_FETCH, async (requestParams, { extra }) => {
  const { productApi } = extra;

  return productApi.getProducts(requestParams);
});

const loadPopularProducts = createAsyncThunk<
  ProductDto[],
  ProductQuery & Record<string, unknown>,
  AsyncThunkConfig
>(ActionType.POPULAR_PRODUCTS_FETCH, async (requestParams, { extra }) => {
  const { productApi } = extra;

  return productApi.getPopularProducts(requestParams);
});

const loadPopularLots = createAsyncThunk<
  ProductDto[],
  ProductQuery & Record<string, unknown>,
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
};
