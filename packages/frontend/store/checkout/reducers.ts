import { createSlice } from '@reduxjs/toolkit';
import type { OrderDto, PurchaseRequestData } from '@vse-bude/shared';
import { createOrderAction, fetchPurchaseRequestData } from './actions';

interface CheckoutState {
  purchaseRequestData: PurchaseRequestData | null;
  order: OrderDto | null;
  loading: boolean;
}

const initialState = {
  purchaseRequestData: null,
  order: null,
  loading: false,
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPurchaseRequestData.pending.type](state) {
      state.loading = true;
    },
    [fetchPurchaseRequestData.fulfilled.type](state, { payload }) {
      state.purchaseRequestData = payload;
      state.loading = false;
    },
    [fetchPurchaseRequestData.rejected.type](state) {
      state.loading = false;
    },

    [createOrderAction.pending.type](state) {
      state.loading = true;
    },
    [createOrderAction.fulfilled.type](state, { payload }) {
      state.order = payload;
      state.loading = false;
    },
    [createOrderAction.rejected.type](state) {
      state.loading = false;
    },
  },
});

export const checkoutReducer = checkoutSlice.reducer;
export type { CheckoutState };
