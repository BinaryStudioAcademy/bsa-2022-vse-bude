import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { ProductDto, AllProductsDto } from '@vse-bude/shared';
import { DataStatus } from '~/common/enums/enums';
import {
  loadProducts,
  fetchFavorites,
  fetchFavoriteIds,
  addToFavorite,
  deleteFromFavorite,
  cleanFavoriteIds,
} from './actions';

type InitialState = {
  dataStatus: DataStatus;
  products: AllProductsDto;
  favorites: ProductDto[] | [];
  favoriteIds: Array<string>;
};

const initialState: InitialState = {
  products: { items: [], count: 0 },
  dataStatus: DataStatus.IDLE,
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
