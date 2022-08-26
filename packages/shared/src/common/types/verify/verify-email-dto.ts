import type { VerificationTypes } from '../../enums';

export interface VerifyEmailDto {
  userId: string;
  code: string;
  type: VerificationTypes.EMAIL;
}
