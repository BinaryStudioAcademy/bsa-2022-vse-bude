import { createAsyncThunk } from '@reduxjs/toolkit';
import { createOrder } from 'services/order';
import { createPurchaseRequestData } from 'services/payment';
import { CheckoutActions } from './action-types';

export const fetchPurchaseRequestData = createAsyncThunk(
  CheckoutActions.FETCH_PURCHASE_REQUEST_DATA,
  async (orderId: string) => createPurchaseRequestData(orderId),
);

export const fetchCreateOrder = createAsyncThunk(
  CheckoutActions.CREATE_ORDER,
  async (productId: string) => createOrder(productId),
);
