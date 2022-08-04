import { MMKV } from 'react-native-mmkv';
import { StorageKey } from '~/common/enums/enums';

type Constructor = {
  storage: MMKV;
};

class Storage {
  #storage: MMKV;

  constructor({ storage }: Constructor) {
    this.#storage = storage;
  }

  getItem(key: StorageKey): string | null {
    return this.#storage.getString(key) ?? null;
  }

  setItem(key: StorageKey, value: string): void {
    return this.#storage.set(key, value);
  }

  removeItem(key: StorageKey): void {
    return this.#storage.delete(key);
  }
}

export { Storage };
