import { http } from '@helpers';
import type { ProductDto } from '@vse-bude/shared';
import { ApiRoutes, HttpContentType } from '@vse-bude/shared';

export const getPostById = () => Promise.resolve();

export const createPost = (data: FormData): Promise<ProductDto> =>
  http.post({
    url: ApiRoutes.PRODUCTS,
    body: data,
    options: {
      contentType: HttpContentType.FORM_DATA,
    },
  });

export const uploadImage = (formData: FormData) =>
  http.post({
    url: ApiRoutes.UPLOAD_IMAGE,
    body: formData,
    options: {
      contentType: HttpContentType.FORM_DATA,
    },
  });
