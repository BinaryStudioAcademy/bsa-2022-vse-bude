import { http } from '@helpers';
import type {
  AllProductsDto,
  AuctionPermissionsRequest,
  CreateBidRequest,
  Http,
  ProductDto,
  ProductIdRequest,
  ProductQuery,
} from '@vse-bude/shared';
import { HttpContentType } from '@vse-bude/shared';
import { ProductApiRoutes } from '@vse-bude/shared';
import { ApiRoutes } from '@vse-bude/shared';

interface ProductOptionsSSR extends ProductQuery {
  httpSSR: Http;
}

export const getProducts = ({
  type,
  categoryId,
  sortBy,
  from,
  order,
  limit,
  priceGt,
  priceLt,
}: ProductQuery): Promise<AllProductsDto> =>
  http.get({
    url: `${ApiRoutes.PRODUCTS}`,
    payload: {
      type,
      categoryId,
      sortBy,
      from,
      order,
      limit,
      priceGt,
      priceLt,
    },
  });

export const getProductsSSR = ({
  httpSSR,
  type,
  categoryId,
  sortBy,
  from,
}: ProductOptionsSSR): Promise<ProductDto[]> =>
  httpSSR.get({
    url: `${ApiRoutes.PRODUCTS}`,
    payload: {
      type,
      categoryId,
      sortBy,
      from,
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

export const getProductEditByIdSSR = (httpSSR: Http, id: string) =>
  httpSSR.get({
    url: `${ApiRoutes.PRODUCTS}/edit/${id}`,
    options: {
      needAuthorization: true,
    },
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

export const getPopularLots = ({
  httpSSR,
  limit,
}: ProductOptionsSSR): Promise<ProductDto[]> =>
  httpSSR.get({
    url: `${ApiRoutes.PRODUCTS}${ProductApiRoutes.POPULAR_LOTS}`,
    payload: {
      limit,
    },
  });

export const getPopularProducts = ({
  httpSSR,
  limit,
}: ProductOptionsSSR): Promise<ProductDto[]> =>
  httpSSR.get({
    url: `${ApiRoutes.PRODUCTS}${ProductApiRoutes.POPULAR_PRODUCTS}`,
    payload: {
      limit,
    },
  });

export const getSilimar = (productId: string): Promise<ProductDto[]> =>
  http.get({
    url: `${ApiRoutes.PRODUCTS}${ProductApiRoutes.SIMILAR}`,
    payload: {
      productId,
    },
  });

export const search = (q: string): Promise<ProductDto[]> =>
  http.get({
    url: `${ApiRoutes.PRODUCTS}${ProductApiRoutes.SEARCH}`,
    payload: {
      q,
    },
  });
