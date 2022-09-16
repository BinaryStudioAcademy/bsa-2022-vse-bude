import {
  ApiRoutes,
  AuctionPermissionsResponse,
  Bid,
  CreateBidRequest,
  HttpContentType,
  HttpMethod,
  ProductApiRoutes,
  ProductDto,
  AllProductsDto,
  ICreateAuction,
  IPostForms,
} from '@vse-bude/shared';
import { ProductRequestDto } from '~/common/types/types';

import { Http } from '~/services/http/http.service';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class ProductService {
  #http: Http;

  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  getProducts(requestParams: ProductRequestDto = {}): Promise<AllProductsDto> {
    return this.#http.load(`${this.#apiPrefix}${ApiRoutes.PRODUCTS}`, {
      params: requestParams,
    });
  }

  getPopularProducts(
    requestParams: ProductRequestDto = {},
  ): Promise<ProductDto[]> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.PRODUCTS}${
        ProductApiRoutes.POPULAR_PRODUCTS
      }`,
      {
        params: requestParams,
      },
    );
  }

  getPopularLots(requestParams: ProductRequestDto = {}): Promise<ProductDto[]> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.PRODUCTS}${ProductApiRoutes.POPULAR_LOTS}`,
      {
        params: requestParams,
      },
    );
  }

  getProductById(productId: string): Promise<ProductDto> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.PRODUCTS}/${productId}`,
    );
  }

  fetchAuctionPermissions(
    productId: string,
  ): Promise<AuctionPermissionsResponse> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.PRODUCTS}${
        ProductApiRoutes.AUCTION_PERMISSIONS
      }?productId=${productId}`,
      {
        method: HttpMethod.GET,
        hasAuth: true,
      },
    );
  }

  leaveAuction(productId: string): Promise<ProductDto> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.PRODUCTS}${
        ProductApiRoutes.AUCTION_LEAVE
      }?productId=${productId}`,
      {
        method: HttpMethod.POST,
      },
    );
  }

  placeBid(requestParams: CreateBidRequest): Promise<Bid> {
    return this.#http.load(`${this.#apiPrefix}${ApiRoutes.BIDS}`, {
      contentType: HttpContentType.APPLICATION_JSON,
      payload: JSON.stringify(requestParams),
      method: HttpMethod.POST,
    });
  }

  incrementProductViews = (productId: string): Promise<ProductDto> => {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.PRODUCTS}/${productId}${
        ProductApiRoutes.VIEWS
      }`,
      {
        method: HttpMethod.PUT,
        payload: JSON.stringify({ productId }),
      },
    );
  };

  saveProduct(
    _payload: ICreateAuction | IPostForms,
  ): Promise<ICreateAuction | IPostForms> {
    return this.#http.load(`${this.#apiPrefix}${ApiRoutes.PRODUCTS}`, {
      method: HttpMethod.POST,
      contentType: HttpContentType.APPLICATION_JSON,
      payload: JSON.stringify(_payload),
      hasAuth: true,
    });
  }
}

export { ProductService };
