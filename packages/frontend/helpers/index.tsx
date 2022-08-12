import { Http } from '@vse-bude/shared';
import { AuthService } from './auth';
import { CookieStorage } from './cookies';

const cookieStorage = new CookieStorage();
const auth = new AuthService(cookieStorage);

const http = new Http(process.env.NEXT_PUBLIC_API_ROUTE, auth);

export { cookieStorage, http, CookieStorage, auth };
export * from './title';
