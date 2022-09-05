import { Http } from '@vse-bude/shared';
import { AuthHelper } from './auth';
import { CookieStorage } from './cookies';
import { LocalStorage } from './local-storage';
import { LocaleHelper } from './locale';
import { profileMapper, updateDtoMapper } from './profile-mapper';
import { StorageService } from './storage';

const cookieStorage = new CookieStorage();
const auth = new AuthHelper(cookieStorage);

const localStorage = new LocalStorage();
const locale = new LocaleHelper(localStorage);
const storageService = new StorageService(auth, locale);

const http = new Http(process.env.NEXT_PUBLIC_API_ROUTE, storageService);

export {
  cookieStorage,
  http,
  CookieStorage,
  auth,
  AuthHelper,
  locale,
  profileMapper,
  updateDtoMapper,
};
export * from './title';
export { getCroppedImg } from './getCroppedImg';
