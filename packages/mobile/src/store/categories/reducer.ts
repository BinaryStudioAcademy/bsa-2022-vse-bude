import { createReducer } from '@reduxjs/toolkit';
import { CategoryResponseDto } from '@vse-bude/shared';
import { DataStatus } from '~/common/enums/enums';
import { loadAllCategories } from './action';

type InitialState = {
  categories: CategoryResponseDto[] | [];
  dataStatus: DataStatus;
};

const initialState: InitialState = {
  categories: [],
  dataStatus: DataStatus.IDLE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadAllCategories.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    })
    .addCase(loadAllCategories.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    })
    .addCase(loadAllCategories.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.categories = action.payload;
    });
});

export { reducer };
