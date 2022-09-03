import type { UserDto } from '@vse-bude/shared';

export interface IAuth {
  error?: string;
  accessToken: string;
  accessExpiresAt: number;
  refreshToken: string;
  user: UserDto;
}
