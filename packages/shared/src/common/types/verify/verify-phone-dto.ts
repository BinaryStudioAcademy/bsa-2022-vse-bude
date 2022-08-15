export interface VerifyPhoneDto {
  userId: string;
  code: string;
  type: 'PHONE';
}
