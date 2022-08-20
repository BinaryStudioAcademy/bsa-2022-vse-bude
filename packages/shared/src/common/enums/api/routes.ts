export enum ApiRoutes {
  USERS = '/users',
  CATEGORIES = '/categories',
  PRODUCTS = '/products',
  NEWS = '/news',
  AUTH = '/auth',
  UPLOAD_IMAGE = '/upload-image',
  VERIFY = '/verify',
}

export enum AuthApiRoutes {
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  SIGN_OUT = '/sign-out',
  REFRESH_TOKEN = '/refresh-token',
  USER = '/user',
}

export enum VerifyApiRoutes {
  VERIFY_PHONE = '/phone-verify',
  VERIFY_EMAIL = '/email-verify',
  PHONE_RESEND_CODE = '/phone/resend-code',
  EMAIL_RESEND_CODE = '/email/resend-code',
}

export enum ProductApiRoutes {
  $TYPE = '/:type',
}
