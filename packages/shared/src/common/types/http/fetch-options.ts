import type {
  HttpAcceptLanguage,
  HttpContentType,
  HttpMethod,
} from '../../enums';

interface FetchOptions {
  external?: boolean;
  needAuthorization?: boolean;
  contentType?: HttpContentType;
  acceptLanguage?: HttpAcceptLanguage;
}

export interface RequestArgs {
  url: string;
  method: HttpMethod;
  body?: unknown;
  options?: FetchOptions;
}

export interface BaseRequestParams {
  url: string;
  options?: FetchOptions;
}

export interface GetRequestParams extends BaseRequestParams {
  payload?: Record<string, unknown>;
}

export interface PostRequestParams extends BaseRequestParams {
  body: Record<string, unknown> | FormData;
}

export interface PutRequestParams extends BaseRequestParams {
  body: Record<string, unknown> | FormData;
}

export type DeleteRequestParams = BaseRequestParams;
