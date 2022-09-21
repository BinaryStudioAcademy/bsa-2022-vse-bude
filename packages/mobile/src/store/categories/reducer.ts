import { createReducer } from '@reduxjs/toolkit';
import { DataStatus } from '~/common/enums/enums';
import { CategoryDto } from '@vse-bude/shared';
import { loadAllCategories } from './action';

type InitialState = {
  categories: CategoryDto[] | [];
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
