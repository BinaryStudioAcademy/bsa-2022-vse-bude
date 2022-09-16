import {
  createAction,
  createAsyncThunk,
  PrepareAction,
} from '@reduxjs/toolkit';
import { AsyncThunkConfig, ProductRequestDto } from '~/common/types/types';
import {
  AuctionPermissionsResponse,
  Bid,
  CreateBidRequest,
  AllProductsDto,
  UpdateProductPriceEvent,
  ProductDto,
  ICreateAuction,
  IPostForms,
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

const saveProduct = createAsyncThunk<
  null,
  ICreateAuction | IPostForms,
  AsyncThunkConfig
>(ActionType.SAVE_PRODUCT, async (payload, { extra }) => {
  const { productApi } = extra;

  await productApi.saveProduct(payload);

  return null;
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
  saveProduct,
};
