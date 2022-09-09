import { Routes } from '@enums';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Router from 'next/router';
import { createOrder } from 'services/order';
import { createPurchaseRequestData } from 'services/payment';
import { CheckoutActions } from './action-types';

export const fetchPurchaseRequestData = createAsyncThunk(
  CheckoutActions.FETCH_PURCHASE_REQUEST_DATA,
  async (orderId: string) => createPurchaseRequestData(orderId),
);

export const createOrderAction = createAsyncThunk(
  CheckoutActions.CREATE_ORDER,
  (productId: string) => {
    createOrder(productId).then((order) => {
      Router.push(`${Routes.CHECKOUT}?id=${order.id}`);
    });
  },
);
