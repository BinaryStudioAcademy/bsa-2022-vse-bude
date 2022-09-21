import type {
  Http,
  ProductDto,
  ProductToArchive,
  ProductPost,
  DeleteProduct,
} from '@vse-bude/shared';
import {
  ApiRoutes,
  AccountApiRoutes,
  ProfileApiRoutes,
} from '@vse-bude/shared';
import { http } from '@helpers';

export const getMyListSSR = (params: { http: Http }) =>
  params.http.get({
    url: `${ApiRoutes.PROFILE}${AccountApiRoutes.MY_LIST}`,
  });

export const addProductToArchive = ({
  data,
}: {
  data: ProductToArchive;
}): Promise<ProductDto> =>
  http.put({
    url: `${ApiRoutes.PROFILE}${ProfileApiRoutes.ADD_TO_ARCHIVE}`,
    body: data,
  });

export const addProductToPosted = ({ data }: { data: ProductPost }) =>
  http.put({
    url: `${ApiRoutes.PROFILE}${ProfileApiRoutes.ADD_TO_POSTED}`,
    body: data,
  });

export const deleteProduct = ({
  productId,
}: {
  productId: string;
}): Promise<DeleteProduct> =>
  http.delete({
    url: `${ApiRoutes.PROFILE}${ProfileApiRoutes.DELETE_ITEM}?productId=${productId}`,
  });
