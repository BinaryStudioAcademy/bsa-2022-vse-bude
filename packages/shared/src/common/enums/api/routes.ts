export enum ApiRoutes {
  USERS = '/users',
  CATEGORIES = '/categories',
  PRODUCTS = '/products',
  NEWS = '/news',
  AUTH = '/auth',
  UPLOAD_IMAGE = '/upload-image',
  VERIFY = '/verify',
  HEALTH = '/health',
  CREATE_POST = '/post',
}

export enum AuthApiRoutes {
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  SIGN_OUT = '/sign-out',
  REFRESH_TOKEN = '/refresh-token',
  USER = '/user',
  RESET_PASSWORD_LINK = '/reset-password-link',
  RESET_PASSWORD = '/reset-password',
  UPDATE_PASSWORD = '/update-password',
}

export enum VerifyApiRoutes {
  VERIFY_PHONE = '/phone-verify',
  VERIFY_EMAIL = '/email-verify',
  PHONE_RESEND_CODE = '/phone/resend-code',
  EMAIL_RESEND_CODE = '/email/resend-code',
}

export enum ProductApiRoutes {
  ID = '/:id',
  VIEWS = '/views',
}
