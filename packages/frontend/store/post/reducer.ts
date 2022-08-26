import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import type { IPostForms } from '@vse-bude/shared';
import { fetchUploadImage } from './actions';

export interface PostState {
  forms: IPostForms | null;
  images: {
    data: string[];
    error: string;
    loading: boolean;
  };
  error: string;
  loading: boolean;
}

const forms = createReducer<IPostForms>(null, {});

const imagesData = createReducer<string[]>([], {
  [fetchUploadImage.fulfilled.type]: (state, { payload }) => [
    payload,
    ...state,
  ],
});

const loading = createReducer(false, {});

const imagesLoading = createReducer(false, {
  [fetchUploadImage.pending.type]: () => true,
  [fetchUploadImage.fulfilled.type]: () => false,
  [fetchUploadImage.rejected.type]: () => false,
});

const error = createReducer('', {});

const imagesError = createReducer('', {
  [fetchUploadImage.rejected.type]: (_, { payload }) => payload,
  [fetchUploadImage.pending.type]: () => '',
});

export const postReducer = combineReducers({
  images: combineReducers({
    loading: imagesLoading,
    error: imagesError,
    data: imagesData,
  }),
  forms,
  error,
  loading,
});
