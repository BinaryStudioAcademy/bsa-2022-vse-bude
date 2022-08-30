export enum ApiRoutes {
  USERS = '/users',
  ACCOUNT = '/account',
  CATEGORIES = '/categories',
  PRODUCTS = '/products',
  NEWS = '/news',
  AUTH = '/auth',
  PROFILE = '/profile',
  UPLOAD_IMAGE = '/upload-image',
  VERIFY = '/verify',
  CHECK_VERIFY = '/verify/:id',
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
  CHECK_VERIFY = '/verify/check-verify/:id',
}

export enum ProductApiRoutes {
  ID = '/:id',
  VIEWS = '/views',
  FAVORITE = '/favorite',
  FAVORITE_IDS = '/favorite-ids',
}

export enum ProfileApiRoutes {
  GET_USER_BY_ID = '/:userId',
  UPDATE_DATA = '/save',
}

export enum AccountApiRoutes {
  PERSONAL_INFO = '/personal-info',
  MY_LIST = '/my-list',
}
