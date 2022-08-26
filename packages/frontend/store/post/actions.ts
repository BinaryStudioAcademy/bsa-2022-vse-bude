import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ICreatePost } from 'common/types/post/create-post';
import { createPost, getPostById, uploadImage } from 'services/post';
import { PostActions } from './action-types';

export const fetchProducts = createAsyncThunk(
  PostActions.FETCH_POST,
  async () => getPostById(),
);

export const fetchCreatePost = createAsyncThunk(
  PostActions.CREATE_POST,
  async (data: ICreatePost) => createPost(data),
);

export const fetchUploadImage = createAsyncThunk(
  PostActions.UPLOAD_IMAGE,
  async (data: FormData, { rejectWithValue }) => {
    try {
      const url = (await uploadImage(data)) as string;

      return url;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
