export interface SaveVerifyCode {
  type: 'PHONE' | 'EMAIL';
  userId: string;
  code: string;
}
