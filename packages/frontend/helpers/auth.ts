import { http } from '@helpers';
import type { Auth, Storage } from '@vse-bude/shared';
import { AuthApiRoutes } from '@vse-bude/shared';
import { StorageKey } from '@vse-bude/shared';

class AuthService implements Auth {
  private _storage: Storage;

  constructor(storage: Storage) {
    this._storage = storage;
  }

  public getAccessToken(): string {
    return this._storage.get(StorageKey.ACCESS_TOKEN);
  }

  public getRefreshToken(): string {
    return this._storage.get(StorageKey.REFRESH_TOKEN);
  }

  public setTokens(accessToken: string, refreshToken: string): void {
    this._storage.set(StorageKey.ACCESS_TOKEN, accessToken);
    this._storage.set(StorageKey.REFRESH_TOKEN, refreshToken);
  }

  public logout(): void {
    this._storage.delete(StorageKey.ACCESS_TOKEN);
    this._storage.delete(StorageKey.REFRESH_TOKEN);
  }

  public getCurrentUser() {
    return http.get({
      url: AuthApiRoutes.GET_USER,
    });
  }
}

export { AuthService };
