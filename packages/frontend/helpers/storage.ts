import type {
  IAuthHelper,
  ILocaleHelper,
  IStorageService,
} from '@vse-bude/shared';

class StorageService implements IStorageService {
  _auth: IAuthHelper;

  _locale: ILocaleHelper;

  constructor(auth?: IAuthHelper, locale?: ILocaleHelper) {
    this._auth = auth;
    this._locale = locale;
  }
}

export { StorageService };
