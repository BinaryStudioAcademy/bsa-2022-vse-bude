import { Routes } from '@enums';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Router from 'next/router';
import { createOrder } from 'services/order';
import { createPurchaseRequestData } from 'services/payment';
import { addToast } from 'store/toast/actions';
import { CheckoutActions } from './action-types';

export const fetchPurchaseRequestData = createAsyncThunk(
  CheckoutActions.FETCH_PURCHASE_REQUEST_DATA,
  async (orderId: string) => createPurchaseRequestData(orderId),
);

export const createOrderAction = createAsyncThunk(
  CheckoutActions.CREATE_ORDER,
  (productId: string, { rejectWithValue, dispatch }) => {
    createOrder(productId)
      .then((data) => {
        Router.push(`${Routes.CHECKOUT}?id=${data.id}`);
      })
      .catch((e) => {
        dispatch(
          addToast({
            level: 'error',
            description: e.message,
          }),
        );
        rejectWithValue(e.message);
      });
  },
);
