import i18next from 'i18next';
import {
  HttpHeader,
  HttpMethod,
  HttpError,
  HttpStatusCode,
} from '@vse-bude/shared';
import { StorageKey } from '~/common/enums/enums';
import { GetHeadersParams, HttpOptions } from '~/common/types/types';
import { getQueryString } from '~/helpers/helpers';
import { store } from '~/store/store';
import { auth as authActions } from '~/store/actions';
import { Storage } from '../storage/storage.service';
import { authApi, storage } from '../services';

type Constructor = {
  storage: Storage;
};

class Http {
  #storage: Storage;

  constructor({ storage }: Constructor) {
    this.#storage = storage;
  }

  load<T = unknown>(
    url: string,
    options: Partial<HttpOptions> = {},
  ): Promise<T> {
    const {
      method = HttpMethod.GET,
      payload = null,
      contentType,
      hasAuth = true,
      params,
    } = options;

    const headers = this.getHeaders({
      contentType,
      hasAuth,
    });

    return this.makeRequest(this.getUrl(url, params), {
      method,
      headers,
      body: payload,
    });
  }

  private async makeRequest<T = unknown>(
    url: string,
    config: { method: HttpMethod; headers: Headers; body: BodyInit_ },
  ): Promise<T> {
    const result = await fetch(url, config);

    if (result.status === HttpStatusCode.UNAUTHORIZED) {
      await this.updateAuthorizationToken();
      const updatedConfig = this.getRefreshedAuthReqConfig(config);

      return await fetch(url, updatedConfig)
        .then(this.checkStatus)
        .then((res) => this.parseJSON<T>(res))
        .catch(this.throwError);
    }

    return this.parseJSON<T>(result);
  }

  private getRefreshedAuthReqConfig(config: {
    method?: HttpMethod;
    headers?: Headers;
    body?: BodyInit_;
  }) {
    const token = this.#storage.getItem(StorageKey.ACCESS_TOKEN);
    if (config.headers) {
      config.headers.set(HttpHeader.AUTHORIZATION, `Bearer ${token}`);
    }

    return config;
  }

  private getUrl(url: string, params?: Record<string, unknown>): string {
    return `${url}${params ? `${getQueryString(params)}` : ''}`;
  }

  private getHeaders({ contentType, hasAuth }: GetHeadersParams): Headers {
    const headers = new Headers();

    if (contentType) {
      headers.append(HttpHeader.CONTENT_TYPE, contentType);
    }

    if (hasAuth) {
      const token = this.#storage.getItem(StorageKey.ACCESS_TOKEN);

      headers.append(HttpHeader.AUTHORIZATION, `Bearer ${token}`);
    }

    return headers;
  }

  private async checkStatus(response: Response): Promise<Response> {
    if (!response.ok) {
      const parsedException = await response
        .json()
        .then((resp) => ({
          message: resp?.error || i18next.t('errors.UNKNOWN_ERROR'),
        }))
        .catch(() => ({
          message: response.statusText,
        }));

      throw new HttpError({
        status: response.status,
        message: parsedException?.message,
      });
    }

    return response;
  }

  private async updateAuthorizationToken() {
    const refreshToken = storage.getItem(StorageKey.REFRESH_TOKEN);

    if (refreshToken) {
      const payload = {
        tokenValue: refreshToken,
      };
      const refreshResponse = await authApi.refreshToken(payload);

      storage.setItem(StorageKey.ACCESS_TOKEN, refreshResponse.accessToken);
      storage.setItem(StorageKey.REFRESH_TOKEN, refreshResponse.refreshToken);

      if (!refreshResponse.accessToken) {
        store.dispatch(authActions.logOut());
      }
    }
  }

  private parseJSON<T>(response: Response): Promise<T> {
    return response.json();
  }

  private throwError(err: Error): never {
    throw err;
  }
}

export { Http };
