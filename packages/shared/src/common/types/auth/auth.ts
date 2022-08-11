export interface Auth {
  updateAuthorizationToken(): Promise<boolean>;
  getAccessToken(): string;
}
