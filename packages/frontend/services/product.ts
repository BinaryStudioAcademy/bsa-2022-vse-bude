import { http } from '@helpers';
import type {
  AuctionPermissionsRequest,
  CreateBidRequest,
  Http,
  ProductDto,
  ProductIdRequest,
  ProductType,
} from '@vse-bude/shared';
import { HttpContentType } from '@vse-bude/shared';
import { ProductApiRoutes } from '@vse-bude/shared';
import { ApiRoutes } from '@vse-bude/shared';

interface ProductOptions {
  limit: number;
  type?: ProductType;
  categoryId?: string;
}

interface ProductOptionsSSR extends ProductOptions {
  httpSSR: Http;
}

export const getProducts = ({
  limit,
  type,
  categoryId,
}: ProductOptions): Promise<ProductDto[]> =>
  http.get({
    url: `${ApiRoutes.PRODUCTS}`,
    payload: {
      limit,
      type,
      categoryId,
    },
  });

export const getProductsSSR = ({
  httpSSR,
  limit,
  type,
}: ProductOptionsSSR): Promise<ProductDto[]> =>
  httpSSR.get({
    url: `${ApiRoutes.PRODUCTS}`,
    payload: {
      limit,
      type,
    },
  });

export const getProductById = (id: string) =>
  http.get({
    url: `${ApiRoutes.PRODUCTS}/${id}`,
  });

export const getProductByIdSSR = (httpSSR: Http, id: string) =>
  httpSSR.get({
    url: `${ApiRoutes.PRODUCTS}/${id}`,
  });

export const updateProduct = (id: string, body) =>
  http.put({
    url: `${ApiRoutes.PRODUCTS}/update/${id}`,
    body,
    options: {
      contentType: HttpContentType.FORM_DATA,
    },
  });

export const incrementProductViews = (id: string): Promise<ProductDto> =>
  http.put({
    url: `${ApiRoutes.PRODUCTS}/${id}${ProductApiRoutes.VIEWS}`,
    body: { id },
  });

export const fetchFavoriteProductsIds = () =>
  http.get({
    url: `${ApiRoutes.PRODUCTS}${ProductApiRoutes.FAVORITE_IDS}`,
  });

export const addToFavorites = (productId: string) =>
  http.post({
    url: `${ApiRoutes.PRODUCTS}${ProductApiRoutes.FAVORITE}`,
    body: {
      productId,
    },
  });

export const deleteFromFavorites = (productId: string) =>
  http.delete({
    url: `${ApiRoutes.PRODUCTS}${ProductApiRoutes.FAVORITE}?productId=${productId}`,
  });

export const placeBidRequest = (data: CreateBidRequest) =>
  http.post({
    url: `${ApiRoutes.BIDS}`,
    body: { ...data },
  });

export const fetchAuctionPermissions = (data: AuctionPermissionsRequest) =>
  http.get({
    url: `${ApiRoutes.PRODUCTS}${ProductApiRoutes.AUCTION_PERMISSIONS}?productId=${data.productId}`,
  });

export const leaveAuctionRequest = (data: ProductIdRequest) =>
  http.post({
    url: `${ApiRoutes.PRODUCTS}${ProductApiRoutes.AUCTION_LEAVE}?productId=${data.productId}`,
    body: {},
  });
