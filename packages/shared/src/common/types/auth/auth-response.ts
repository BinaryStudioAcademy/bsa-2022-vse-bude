import type { UserResponseDto } from '../user';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  accessExpiresAt: number;
  user: UserResponseDto;
}
