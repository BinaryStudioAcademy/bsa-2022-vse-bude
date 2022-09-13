import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { ProductDto, AllProductsDto } from '@vse-bude/shared';
import { DataStatus } from '~/common/enums/enums';
import {
  loadProducts,
  fetchFavorites,
  fetchFavoritesIds,
  addToFavorite,
  deleteFromFavorite,
  addToTemporaryFavorites,
  deleteFromTemporaryFavorites,
  cleanTemporaryFavorites,
} from './actions';

type InitialState = {
  dataStatus: DataStatus;
  products: AllProductsDto;
  favorites: ProductDto[] | [];
  favoritesIds: Array<string>;
  tempFavoritesIds: Array<string>;
};

const initialState: InitialState = {
  products: { items: [], count: 0 },
  dataStatus: DataStatus.IDLE,
  favorites: [],
  favoritesIds: [],
  tempFavoritesIds: [],
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
    .addCase(fetchFavoritesIds.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.favoritesIds = [...action.payload];
    })
    .addCase(addToFavorite.fulfilled, (state) => {
      state.dataStatus = DataStatus.FULFILLED;
    })
    .addCase(deleteFromFavorite.fulfilled, (state) => {
      state.dataStatus = DataStatus.FULFILLED;
    })
    .addCase(addToTemporaryFavorites, (state, action) => {
      state.tempFavoritesIds = [...state.tempFavoritesIds, action.payload];
    })
    .addCase(deleteFromTemporaryFavorites, (state, action) => {
      state.tempFavoritesIds = state.tempFavoritesIds.filter(
        (id) => id !== action.payload,
      );
    })
    .addCase(cleanTemporaryFavorites, (state, action) => {
      state.tempFavoritesIds = action.payload;
    })

    .addMatcher(
      isAnyOf(
        loadProducts.pending,
        fetchFavorites.pending,
        fetchFavoritesIds.pending,
        addToFavorite.pending,
      ),
      (state) => {
        state.dataStatus = DataStatus.PENDING;
      },
    )
    .addMatcher(
      isAnyOf(
        loadProducts.rejected,
        fetchFavorites.rejected,
        fetchFavoritesIds.rejected,
        addToFavorite.rejected,
      ),
      (state) => {
        state.dataStatus = DataStatus.REJECTED;
      },
    );
});

export { reducer };
