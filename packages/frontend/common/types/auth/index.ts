export interface IAuth {
  error?: string;
  accessToken: string;
  accessExpiresAt: number;
  refreshToken: string;
}
