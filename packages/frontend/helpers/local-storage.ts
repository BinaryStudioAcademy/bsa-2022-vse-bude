import type { StorageKey } from '@vse-bude/shared';
import { type Storage } from '@vse-bude/shared';

class LocalStorage implements Storage {
  get<T>(key: StorageKey): T {
    if (typeof window !== 'undefined') {
      return <T>JSON.parse(window.localStorage.getItem(key));
    }
  }

  set<T>(key: StorageKey, value: T): void {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }

  delete(key: StorageKey): void {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(key);
    }
  }

  clear(): void {
    if (typeof window !== 'undefined') {
      window.localStorage.clear();
    }
  }
}
export { LocalStorage };
