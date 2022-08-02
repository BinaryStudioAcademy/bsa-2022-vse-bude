import type { StorageKey } from '../../enums/storage';

export interface Storage {
  get<T>(key: StorageKey): T;
  set<T>(key: StorageKey, value: T, options?: Record<string, unknown>): void;
  delete(key: StorageKey): void;
  clear(): void;
}
