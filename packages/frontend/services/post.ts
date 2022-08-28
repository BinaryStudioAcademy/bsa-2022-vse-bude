import { http } from '@helpers';
import { ApiRoutes, HttpContentType } from '@vse-bude/shared';

export const getPostById = () => Promise.resolve();

export const createPost = (_data: FormData) => Promise.resolve();

export const uploadImage = (formData: FormData) =>
  http.post({
    url: ApiRoutes.UPLOAD_IMAGE,
    body: formData,
    options: {
      contentType: HttpContentType.FORM_DATA,
    },
  });
