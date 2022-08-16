export interface IAuthHelper {
  getAccessToken(): string;
  getRefreshToken(): string;
  setTokens(accessToken: string, refreshToken: string): void;
  logOut(): void;
}
