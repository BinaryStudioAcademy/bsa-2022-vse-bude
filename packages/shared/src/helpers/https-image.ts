import { HttpMethod } from '../common/enums';
import type { IAuthHelper } from '../common/types';
import { HttpError, type ErrorResponse } from '../exceptions';

interface MakeRequest {
  url: string;
  config: RequestInit;
}

class HttpImage {
  private _baseUrl: string;

  private _auth: IAuthHelper;

  constructor(baseUrl: string, auth: IAuthHelper) {
    this._baseUrl = baseUrl;
    this._auth = auth;
  }

  public post<T>({ url, body }: { url: string; body: FormData }) {
    const config = this.getRequestOptions({
      method: HttpMethod.POST,
      url,
      body,
    });

    return this.makeRequest<T>(config);
  }

  private getRequestOptions({
    url,
    method,
    body,
  }: {
    method: string;
    url: string;
    body: FormData;
  }): MakeRequest {
    return {
      url: `${this._baseUrl}${url}`,
      config: {
        method,
        body,
      },
    };
  }

  private async makeRequest<T = unknown>({
    url,
    config,
  }: MakeRequest): Promise<T> {
    const result = await fetch(url, config);
    const statusCode = result.status;

    // if (result.status === HttpStatusCode.UNAUTHORIZED) {
    //   try {
    //     await this.updateAuthorizationToken();
    //     result = await fetch(url, config);
    //     statusCode = result.status;
    //   } catch (err) {
    //     const errorRes: ErrorResponse = await result.json();
    //     throw new HttpError({
    //       status: statusCode,
    //       message: errorRes.error,
    //     });
    //   }
    // }

    if (!result.ok) {
      const errorRes: ErrorResponse = await result.json();
      throw new HttpError({
        status: statusCode,
        message: errorRes.error,
      });
    }

    return result.json() as Promise<T>;
  }
}

export { HttpImage };
