import { httpImage } from '@helpers';
import { ApiRoutes } from '@vse-bude/shared';
import type { ICreatePost } from 'common/types/post/create-post';

export const getPostById = () => Promise.resolve();

export const createPost = (_data: ICreatePost) => Promise.resolve();

export const uploadImage = (formData: FormData) =>
  httpImage.post({
    url: ApiRoutes.UPLOAD_IMAGE,
    body: formData,
  });
