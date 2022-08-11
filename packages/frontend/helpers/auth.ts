import { cookieStorage, http } from '@helpers';
import type { Auth } from '@vse-bude/shared';
import { AuthApiRoutes, StorageKey } from '@vse-bude/shared';

interface UpdateAuthorizationTokenResponse {
  accessToken: string;
  refreshToken: string;
}

class AuthService implements Auth {
  public async updateAuthorizationToken() {
    const refreshToken = cookieStorage.get(StorageKey.REFRESH_TOKEN);

    if (refreshToken) {
      try {
        const { accessToken, refreshToken: newRefreshToken } = await http.post<
          Promise<UpdateAuthorizationTokenResponse>
        >({
          url: AuthApiRoutes.REFRESH_TOKEN,
          body: { refreshToken },
          options: {
            isRetryRequest: true,
          },
        });
        cookieStorage.set(StorageKey.ACCESS_TOKEN, accessToken);
        cookieStorage.set(StorageKey.REFRESH_TOKEN, newRefreshToken);

        return true;
      } catch (err) {
        console.error(err);
        cookieStorage.delete(StorageKey.ACCESS_TOKEN);
        cookieStorage.delete(StorageKey.REFRESH_TOKEN);

        return false;
      }
    }
  }

  getAccessToken(): string {
    return cookieStorage.get(StorageKey.ACCESS_TOKEN);
  }
}

export { AuthService };
