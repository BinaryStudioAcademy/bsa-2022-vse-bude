export enum ApiRoutes {
  RANDOM_DATA = '/random-data',
  USERS = '/users',
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
  VERIFY_PHONE = '/phone',
  VERIFY_EMAIL = '/email',
}
