import type { VerificationTypes } from '@vse-bude/shared';

export interface SaveVerifyCode {
  type: VerificationTypes;
  userId: string;
  code: string;
}
