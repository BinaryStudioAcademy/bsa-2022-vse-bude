import type { ILocaleHelper, Storage } from '@vse-bude/shared';
import { StorageKey } from '@vse-bude/shared';

class LocaleHelper implements ILocaleHelper {
  private _storage: Storage;

  constructor(storage: Storage, locale?: string) {
    this._storage = storage;
    this.setLocale(locale);
  }

  getLocale(): string {
    return this._storage.get(StorageKey.LOCALE);
  }

  setLocale(locale: string): void {
    this._storage.set(StorageKey.LOCALE, locale);
  }
}

export { LocaleHelper };
