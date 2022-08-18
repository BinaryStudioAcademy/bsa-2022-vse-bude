export enum ApiRoutes {
  USERS = '/users',
  CATEGORIES = '/categories',
  PRODUCTS = '/products',
  NEWS = '/news',
  AUTH = '/auth',
  UPLOAD_IMAGE = '/upload-image',
  VERIFY = '/verify',
  HEALTH = '/health',
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

export enum ProductApiRoutes {
  $TYPE = '/:type',
}
