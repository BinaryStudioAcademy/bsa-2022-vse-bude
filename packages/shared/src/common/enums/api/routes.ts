export enum ApiRoutes {
  RANDOM_DATA = '/random-data',
  USERS = '/users',
  CATEGORIES = '/categories',
  PRODUCTS = '/products',
  NEWS = '/news',
  AUTH = '/auth',
  UPLOAD_IMAGE = '/upload-image',
}

export enum AuthApiRoutes {
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  SIGN_OUT = '/sign-out',
  REFRESH_TOKEN = '/refresh-token',
  USER = '/user',
}

export enum ProductApiRoutes {
  $TYPE = '/:type',
}
