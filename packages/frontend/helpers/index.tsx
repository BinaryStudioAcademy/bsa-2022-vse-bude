import { Http } from '@vse-bude/shared';
import { CookieStorage } from './cookies';

const cookieStorage = new CookieStorage();

const http = new Http(process.env.NEXT_PUBLIC_API_ROUTE, cookieStorage);

export { cookieStorage, http, CookieStorage };
export * from './title';
