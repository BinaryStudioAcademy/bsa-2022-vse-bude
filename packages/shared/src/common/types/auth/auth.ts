export interface Auth {
  getAccessToken(): string;
  getRefreshToken(): string;
  setTokens(accessToken: string, refreshToken: string): void;
  logout(): void;
  getCurrentUser(): any;
}
