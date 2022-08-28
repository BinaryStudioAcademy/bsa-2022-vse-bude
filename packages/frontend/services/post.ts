import { http } from '@helpers';
import { ApiRoutes, HttpContentType, type ICreatePost } from '@vse-bude/shared';

export const getPostById = () => Promise.resolve();

export const createPost = (_data: ICreatePost) => Promise.resolve();

export const uploadImage = (formData: FormData) =>
  http.post({
    url: ApiRoutes.UPLOAD_IMAGE,
    body: formData,
    options: {
      contentType: HttpContentType.FORM_DATA,
    },
  });
