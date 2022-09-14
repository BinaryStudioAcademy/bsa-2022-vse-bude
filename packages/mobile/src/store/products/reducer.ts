import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { ProductDto, AllProductsDto } from '@vse-bude/shared';
import { DataStatus } from '~/common/enums/enums';
import {
  loadProducts,
  fetchFavorites,
  fetchFavoriteIds,
  addToFavorite,
  deleteFromFavorite,
  addToFavoriteGuestUser,
  deleteFromFavoriteGuestUser,
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
    .addCase(addToFavorite.fulfilled, (state) => {
      state.dataStatus = DataStatus.FULFILLED;
    })
    .addCase(deleteFromFavorite.fulfilled, (state) => {
      state.dataStatus = DataStatus.FULFILLED;
    })
    .addCase(addToFavoriteGuestUser, (state, action) => {
      state.favoriteIds = [...state.favoriteIds, action.payload];
    })
    .addCase(deleteFromFavoriteGuestUser, (state, action) => {
      state.favoriteIds = state.favoriteIds.filter(
        (id) => id !== action.payload,
      );
    })
    .addCase(cleanFavoriteIds, (state, action) => {
      state.favoriteIds = action.payload;
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
