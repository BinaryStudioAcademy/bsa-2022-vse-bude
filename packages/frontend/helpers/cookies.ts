import type { StorageKey } from '@vse-bude/shared';
import { type Storage } from '@vse-bude/shared';
import { deleteCookie, getCookie, getCookies, setCookie } from 'cookies-next';
import type { GetServerSidePropsContext, PreviewData } from 'next';
import type { CookieSerializeOptions } from 'next/dist/server/web/types';
import type { ParsedUrlQuery } from 'querystring';

export class CookieStorage implements Storage {
  private _ctx = undefined;

  constructor(ctx?: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) {
    this._ctx = ctx;
  }

  get<T>(key: StorageKey): T {
    const res = getCookie(key, this._ctx) as string;

    return res ? (JSON.parse(res) as T) : null;
  }

  set<T>(key: StorageKey, value: T, options?: CookieSerializeOptions): void {
    setCookie(key, JSON.stringify(value), { ...this._ctx, ...options });
  }

  delete(key: StorageKey): void {
    deleteCookie(key, this._ctx);
  }

  clear(): void {
    const cookies = getCookies(this._ctx);

    Object.keys(cookies).forEach((cookie: StorageKey) => {
      this.delete(cookie);
    });
  }
}
