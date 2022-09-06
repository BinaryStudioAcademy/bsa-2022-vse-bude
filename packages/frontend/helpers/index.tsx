import { Http } from '@vse-bude/shared';
import { AuthHelper } from './auth';
import { CookieStorage } from './cookies';
import { LocaleHelper } from './locale';
import { profileMapper, updateDtoMapper } from './profile-mapper';

const cookieStorage = new CookieStorage();

const auth = new AuthHelper(cookieStorage);
const locale = new LocaleHelper(cookieStorage);

const http = new Http(process.env.NEXT_PUBLIC_API_ROUTE, locale, auth);

export {
  cookieStorage,
  http,
  CookieStorage,
  auth,
  AuthHelper,
  locale,
  LocaleHelper,
  profileMapper,
  updateDtoMapper,
};
export * from './title';
export * from './socket';
export { getCroppedImg } from './getCroppedImg';
