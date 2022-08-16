import type { VerificationTypes } from '../../enums';

export interface VerifyPhoneDto {
  userId: string;
  code: string;
  type: VerificationTypes.PHONE;
}
