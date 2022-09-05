import queryString from 'query-string';
import {
  HttpHeader,
  HttpMethod,
  HttpStatusCode,
  HttpContentType,
  AuthApiRoutes,
  ApiRoutes,
} from '../common/enums';
import type {
  DeleteRequestParams,
  GetRequestParams,
  PostRequestParams,
  PutRequestParams,
  RequestArgs,
  IStorageService,
} from '../common/types';
import { HttpError, type ErrorResponse } from '../exceptions';

interface MakeRequest {
  url: string;
  config: RequestInit;
}

class Http {
  private _baseUrl: string;

  private _storageService: IStorageService | null;

  constructor(baseUrl: string, storageService?: IStorageService) {
    this._baseUrl = baseUrl;
    this._storageService = storageService || null;
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

    const locale = this._storageService?._locale?.getLocale();
    if (locale) {
      headers[HttpHeader.ACCEPT_LANGUAGE] = locale;
    }

    if (needAuthorization && this._storageService?._auth) {
      const token = this._storageService._auth.getAccessToken();
      headers[HttpHeader.AUTHORIZATION] = `Bearer ${token}`;
    }

    const config: RequestInit = {
      headers,
      method,
    };

    if (body && contentType === HttpContentType.APPLICATION_JSON) {
      config.body = JSON.stringify(body);
    }

    if (body && contentType === HttpContentType.FORM_DATA) {
      config.body = body as BodyInit;
      delete headers[HttpHeader.CONTENT_TYPE];
    }

    return {
      url: external ? url : `${this._baseUrl}${url}`,
      config,
    };
  }

  private getRefreshedAuthReqConfig(config: RequestInit) {
    const accessToken = this._storageService._auth.getAccessToken();
    config.headers[HttpHeader.AUTHORIZATION] = `Bearer ${accessToken}`;

    return config;
  }

  private async makeRequest<T = unknown>({
    url,
    config,
  }: MakeRequest): Promise<T> {
    let result = await fetch(url, config);
    let statusCode = result.status;

    if (result.status === HttpStatusCode.UNAUTHORIZED) {
      try {
        await this.updateAuthorizationToken();
        const updatedConfig = this.getRefreshedAuthReqConfig(config);
        result = await fetch(url, updatedConfig);
        statusCode = result.status;
      } catch (err) {
        const errorRes: ErrorResponse = await result.json();
        throw new HttpError({
          status: statusCode,
          message: errorRes.error,
        });
      }
    }

    if (!result.ok) {
      const errorRes: ErrorResponse = await result.json();
      throw new HttpError({
        status: statusCode,
        message: errorRes.error,
      });
    }

    return result.json() as Promise<T>;
  }

  private async updateAuthorizationToken() {
    const refreshToken = this._storageService._auth.getRefreshToken();

    const res = await fetch(
      `${this._baseUrl}${ApiRoutes.AUTH}${AuthApiRoutes.REFRESH_TOKEN}`,
      {
        method: HttpMethod.POST,
        body: JSON.stringify({ tokenValue: refreshToken }),
        headers: {
          [HttpHeader.CONTENT_TYPE]: HttpContentType.APPLICATION_JSON,
        },
      },
    );

    if (!res.ok) {
      this._storageService._auth.logOut();
      throw new HttpError(res);
    }

    const { accessToken, refreshToken: newRefreshToken } = await res.json();

    this._storageService._auth.setTokens(accessToken, newRefreshToken);
  }
}

export { Http };
