import { createReducer } from '@reduxjs/toolkit';
import { DataStatus } from '~/common/enums/enums';
import { ProductDto } from '@vse-bude/shared';
import {
  auctionLeaveAction,
  auctionMakeBid,
  auctionPermissions,
  loadPopularLots,
  loadPopularProducts,
  loadProductInfo,
  loadProducts,
  updateCurrentItemPrice,
} from './actions';

type InitialState = {
  currentProduct: ProductDto | undefined;
  products: ProductDto[] | [];
  popularProducts: ProductDto[] | [];
  popularLots: ProductDto[] | [];
  dataStatus: DataStatus;
  permissions: {
    isAbleToLeaveAuction: boolean;
  };
};

const initialState: InitialState = {
  products: [],
  popularProducts: [],
  popularLots: [],
  currentProduct: undefined,
  dataStatus: DataStatus.IDLE,
  permissions: {
    isAbleToLeaveAuction: false,
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadProducts.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    })
    .addCase(loadProducts.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    })
    .addCase(loadProducts.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.products = [...state.products, ...action.payload];
    })
    .addCase(loadPopularProducts.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    })
    .addCase(loadPopularProducts.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    })
    .addCase(loadPopularProducts.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.popularProducts = [...state.popularProducts, ...action.payload];
    })
    .addCase(loadPopularLots.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    })
    .addCase(loadPopularLots.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    })
    .addCase(loadPopularLots.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.popularLots = [...state.popularLots, ...action.payload];
    })
    .addCase(loadProductInfo.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    })
    .addCase(loadProductInfo.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    })
    .addCase(loadProductInfo.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.currentProduct = action.payload;
    })
    .addCase(auctionPermissions.fulfilled, (state, action) => {
      state.permissions = {
        ...state.permissions,
        isAbleToLeaveAuction: action.payload.isAbleToLeaveAuction,
      };
    })
    .addCase(auctionPermissions.rejected, (state) => {
      state.permissions = {
        ...state.permissions,
        isAbleToLeaveAuction: false,
      };
    })
    .addCase(auctionLeaveAction.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      if (state.currentProduct) {
        state.currentProduct.currentPrice = action.payload.price;
      }
      state.popularLots.map((product) =>
        product.id === action.payload.id
          ? (product.price = action.payload.price)
          : product.price,
      );
    })
    .addCase(auctionLeaveAction.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    })
    .addCase(auctionMakeBid.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.products.map((product) =>
        product.id === action.payload.productId
          ? (product.price = action.payload.price)
          : product.price,
      );
      state.popularLots.map((product) =>
        product.id === action.payload.productId
          ? (product.price = action.payload.price)
          : product.price,
      );
      if (state.currentProduct) {
        state.currentProduct.currentPrice = action.payload.price;
      }
      state.permissions = {
        ...state.permissions,
        isAbleToLeaveAuction: true,
      };
    })
    .addCase(auctionMakeBid.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    })
    .addCase(updateCurrentItemPrice, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      if (state.currentProduct) {
        state.currentProduct.currentPrice = action.payload.price;
      }
      state.popularLots.map((product) =>
        product.id === action.payload.productId
          ? (product.price = action.payload.price)
          : product.price,
      );
    });
});

export { reducer };
