import { Http } from '@vse-bude/shared';
import { AuthHelper } from './auth';
import { CookieStorage } from './cookies';

const cookieStorage = new CookieStorage();
const auth = new AuthHelper(cookieStorage);
const http = new Http(process.env.NEXT_PUBLIC_API_ROUTE, auth);

export { cookieStorage, http, CookieStorage, auth, AuthHelper };
export * from './title';
export { getCroppedImg } from './getCroppedImg';
