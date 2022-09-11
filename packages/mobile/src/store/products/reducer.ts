import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { ProductDto, ItemDto } from '@vse-bude/shared';
import { DataStatus } from '~/common/enums/enums';
import {
  loadProducts,
  fetchFavorites,
  fetchFavoritesIds,
  loadProductInfo,
} from './actions';

type InitialState = {
  dataStatus: DataStatus;
  products: ProductDto[] | [];
  current: ItemDto | undefined;
  favorites: ProductDto[] | [];
  favoritesIds: Array<string>;
};

const initialState: InitialState = {
  dataStatus: DataStatus.IDLE,
  products: [],
  current: undefined,
  favorites: [],
  favoritesIds: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadProducts.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.products = [...state.products, ...action.payload];
    })
    .addCase(loadProductInfo.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.current = action.payload;
    })
    .addCase(fetchFavorites.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.favorites = [...action.payload];
    })
    .addCase(fetchFavoritesIds.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.favoritesIds = [...action.payload];
    })
    .addMatcher(
      isAnyOf(
        loadProducts.pending,
        loadProductInfo.pending,
        fetchFavorites.pending,
        fetchFavoritesIds.pending,
      ),
      (state) => {
        state.dataStatus = DataStatus.PENDING;
      },
    )
    .addMatcher(
      isAnyOf(
        loadProducts.rejected,
        loadProductInfo.pending,
        fetchFavorites.rejected,
        fetchFavoritesIds.rejected,
      ),
      (state) => {
        state.dataStatus = DataStatus.REJECTED;
      },
    );
});

export { reducer };
