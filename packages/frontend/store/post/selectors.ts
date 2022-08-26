import type { RootState } from '@types';

export const getPostImagesErrorSelector = (state: RootState) =>
  state.post.images.error;
export const getPostImagesLoadingSelector = (state: RootState) =>
  state.post.images.loading;
export const getPostImagesDataSelector = (state: RootState) =>
  state.post.images.data;

export const getPostErrorSelector = (state: RootState) => state.post.error;
export const getPostLoadingSelector = (state: RootState) => state.post.loading;
export const getPostDataSelector = (state: RootState) => state.post.forms;
