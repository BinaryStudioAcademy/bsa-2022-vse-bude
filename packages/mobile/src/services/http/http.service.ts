import i18next from 'i18next';
import { HttpHeader, HttpMethod, HttpError } from '@vse-bude/shared';
import { StorageKey } from '~/common/enums/enums';
import { GetHeadersParams, HttpOptions } from '~/common/types/types';
import { getQueryString } from '~/helpers/helpers';
import { Storage } from '../storage/storage.service';

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

    return fetch(this.getUrl(url, params), {
      method,
      headers,
      body: payload,
    })
      .then(this.checkStatus)
      .then((res) => this.parseJSON<T>(res))
      .catch(this.throwError);
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

  private parseJSON<T>(response: Response): Promise<T> {
    return response.json();
  }

  private throwError(err: Error): never {
    throw err;
  }
}

export { Http };
