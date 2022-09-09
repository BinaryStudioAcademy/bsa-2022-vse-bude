export enum AuthActions {
  FETCH_USER = 'user/fetch-user',
  LOGIN = 'user/login',
  SIGN_UP = 'user/sign-up',
  LOGOUT = 'user/logout',
  REFRESH = 'user/refresh',
  PHONE_VERIFY = 'user/phone-verify',
  PHONE_RESEND_CODE = 'user/phone-resend-code',
  EMAIL_VERIFY = 'user/email-verify',
  EMAIL_RESEND_CODE = 'user/email-resend-code',
  SEND_RESET_PASSWORD_LINK = 'user/send-reset-password-link',
  UPDATE_PASSWORD = 'user/update-password',
  CLEAR_ERRORS = 'user/clear-errors',
}
