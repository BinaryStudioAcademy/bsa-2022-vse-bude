import { createAsyncThunk } from '@reduxjs/toolkit';
import { ItemDto } from '@vse-bude/shared';
import { AsyncThunkConfig } from '~/common/types/types';
import { ActionType } from './common';

const loadProductInfo = createAsyncThunk<ItemDto, string, AsyncThunkConfig>(
  ActionType.PRODUCT_FETCH_INFO,
  async (productId, { extra }) => {
    const { productApi } = extra;
    const response = await productApi.getProductById(productId);

    return response;
  },
);

const updateProductViews = createAsyncThunk<ItemDto, string, AsyncThunkConfig>(
  ActionType.INCREMENT_PRODUCT_VIEWS,
  async (productId, { extra }) => {
    const { productApi } = extra;
    const response = await productApi.incrementProductViews(productId);
    
    return response;
  },
);

export { loadProductInfo, updateProductViews };
