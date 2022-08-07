import queryString from 'query-string';
import {
  HttpHeader,
  HttpMethod,
  HttpStatusCode,
  HttpContentType,
} from '../common/enums';
import type {
  DeleteRequestParams,
  GetRequestParams,
  PostRequestParams,
  PutRequestParams,
  RequestArgs,
  Storage,
} from '../common/types';

interface MakeRequest {
  url: string;
  config: RequestInit;
}

class Http {
  private _baseUrl: string;

  private _storage: Storage;

  constructor(baseUrl: string, storage?: Storage) {
    this._baseUrl = baseUrl;
    this._storage = storage;
  }

  public get<T>({ url, payload, options }: GetRequestParams) {
    const urlPath = this.getUrlWithQuery(url, payload);
    const config = this.getRequestOptions({
      method: HttpMethod.GET,
      url: urlPath,
      options,
    });

    return this.makeRequest<T>(config);
  }

  public post<T>({ url, body, options }: PostRequestParams) {
    const config = this.getRequestOptions({
      method: HttpMethod.POST,
      url,
      body,
      options,
    });

    return this.makeRequest<T>(config);
  }

  public put<T>({ url, body, options }: PutRequestParams) {
    const config = this.getRequestOptions({
      method: HttpMethod.PUT,
      url,
      body,
      options,
    });

    return this.makeRequest<T>(config);
  }

  public delete<K>({ url, options }: DeleteRequestParams) {
    const config = this.getRequestOptions({
      method: HttpMethod.DELETE,
      url,
      options,
    });

    return this.makeRequest<K>(config);
  }

  private getUrlWithQuery(
    url: string,
    params?: Record<string, unknown>,
  ): string {
    return `${url}${params ? `?${queryString.stringify(params)}` : ''}`;
  }

  private getRequestOptions({
    url,
    body,
    method,
    options,
  }: RequestArgs): MakeRequest {
    const {
      external = false,
      needAuthorization = true,
      contentType = HttpContentType.APPLICATION_JSON,
    } = options ?? {};

    const headers: HeadersInit = {
      [HttpHeader.CONTENT_TYPE]: contentType,
    };

    if (needAuthorization) {
      // const token = this._storage.getItem('token');
      // headers[HttpHeader.AUTHORIZATION] = token;
    }

    const config: RequestInit = {
      headers,
      method,
    };

    if (body && contentType === HttpContentType.APPLICATION_JSON) {
      config.body = JSON.stringify(body);
    }

    return {
      url: external ? url : `${this._baseUrl}${url}`,
      config,
    };
  }

  private async makeRequest<T = unknown>({
    url,
    config,
  }: MakeRequest): Promise<T> {
    const result = await fetch(url, config);

    if (result.status === HttpStatusCode.UNAUTHORIZED) {
      // const accessTokenResponse = await this.updateAuthorizationToken();
      // if (accessTokenResponse) {
      //     result = await fetch(url, config);
      // }
    }

    if (!result.ok) {
      // throw new HttpError(result);
    }

    return result.json() as Promise<T>;
  }

  private updateAuthorizationToken() {
    throw new Error('not implemented');
  }
}

export { Http };
