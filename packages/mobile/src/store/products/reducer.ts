import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { AllProductsDto, ProductDto } from '@vse-bude/shared';
import { DataStatus } from '~/common/enums/enums';
import {
  auctionLeaveAction,
  auctionMakeBid,
  auctionPermissions,
  loadPopularLots,
  loadPopularProducts,
  loadProductInfo,
  loadProducts,
  updateCurrentItemPrice,
  updateProductViews,
  fetchFavorites,
  fetchFavoriteIds,
  addToFavorite,
  deleteFromFavorite,
  cleanFavoriteIds,
} from './actions';

type InitialState = {
  currentProduct: ProductDto | null;
  products: AllProductsDto;
  popularProducts: ProductDto[] | [];
  popularLots: ProductDto[] | [];
  dataStatus: DataStatus;
  permissions: {
    isAbleToLeaveAuction: boolean;
  };
  favorites: ProductDto[] | [];
  favoriteIds: Array<string>;
};

const initialState: InitialState = {
  products: { items: [], count: 0 },
  popularProducts: [],
  popularLots: [],
  currentProduct: null,
  dataStatus: DataStatus.IDLE,
  permissions: {
    isAbleToLeaveAuction: false,
  },
  favorites: [],
  favoriteIds: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadProducts.fulfilled, (state, { payload }) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.products = {
        items: [...state.products.items, ...payload.items],
        count: payload.count,
      };
    })
    .addCase(loadPopularProducts.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.popularProducts = [...state.popularProducts, ...action.payload];
    })
    .addCase(loadPopularLots.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.popularLots = [...state.popularLots, ...action.payload];
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
    .addCase(auctionMakeBid.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.products.items.map((product) =>
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
    })
    .addCase(updateProductViews.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.currentProduct
        ? (state.currentProduct.views = action.payload.views)
        : undefined;
    })
    .addCase(fetchFavorites.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.favorites = [...action.payload];
    })
    .addCase(fetchFavoriteIds.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.favoriteIds = [...action.payload];
    })
    .addCase(addToFavorite.fulfilled, (state, { payload }) => {
      state.dataStatus = DataStatus.FULFILLED;
      const isAlreadyFavorite = state.favoriteIds.includes(payload.productId);
      if (!isAlreadyFavorite && payload.productId) {
        state.favoriteIds = [...state.favoriteIds, payload.productId];
      }
    })
    .addCase(deleteFromFavorite.fulfilled, (state, { payload }) => {
      state.dataStatus = DataStatus.FULFILLED;
      if (payload.productId) {
        state.favoriteIds = state.favoriteIds.filter(
          (id) => id !== payload.productId,
        );
      }
    })
    .addCase(cleanFavoriteIds, (state) => {
      state.favoriteIds = [];
    })
    .addMatcher(
      isAnyOf(
        loadProducts.pending,
        loadPopularProducts.pending,
        loadPopularLots.pending,
        loadProductInfo.pending,
        updateProductViews.pending,
        fetchFavorites.pending,
        fetchFavoriteIds.pending,
        addToFavorite.pending,
        deleteFromFavorite.pending,
      ),
      (state) => {
        state.dataStatus = DataStatus.PENDING;
      },
    )
    .addMatcher(
      isAnyOf(
        loadProducts.rejected,
        loadPopularProducts.rejected,
        loadPopularLots.rejected,
        loadProductInfo.rejected,
        auctionLeaveAction.rejected,
        auctionMakeBid.rejected,
        updateProductViews.rejected,
        fetchFavorites.rejected,
        fetchFavoriteIds.rejected,
        addToFavorite.rejected,
        deleteFromFavorite.rejected,
      ),
      (state) => {
        state.dataStatus = DataStatus.REJECTED;
      },
    );
});

export { reducer };
