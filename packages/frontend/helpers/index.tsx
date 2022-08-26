import { Http, HttpImage } from '@vse-bude/shared';
import { AuthHelper } from './auth';
import { CookieStorage } from './cookies';

const cookieStorage = new CookieStorage();
const auth = new AuthHelper(cookieStorage);

const http = new Http(process.env.NEXT_PUBLIC_API_ROUTE, auth);
const httpImage = new HttpImage(process.env.NEXT_PUBLIC_API_ROUTE, auth);

export { cookieStorage, httpImage, http, CookieStorage, auth, AuthHelper };
export * from './title';
export * from './withProtected';
export * from './withPublic';
