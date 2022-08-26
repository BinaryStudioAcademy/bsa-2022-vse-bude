import { HttpError } from '@vse-bude/shared';
import type { ICreatePost } from 'common/types/post/create-post';

export const getPostById = () => Promise.resolve();

export const createPost = (_data: ICreatePost) => Promise.resolve();

export const uploadImage = (formData: FormData) => {
  console.log(formData);

  return fetch('http://localhost:3001/upload-image', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new HttpError(response);
      }

      return response.json();
    })
    .catch((error) => error.error);
  // return http.post({
  //   url: ApiRoutes.UPLOAD_IMAGE,
  //   body: formData,
  // options: {
  //   contentType: false,
  // },
  // });
};
