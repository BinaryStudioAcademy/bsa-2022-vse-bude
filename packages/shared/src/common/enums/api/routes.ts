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
  HEALTH = '/health',
  CREATE_POST = '/post',
  BIDS = '/bids',
  ORDERS = '/orders',
  ITEMS = '/items',
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
  EDIT_ID = '/edit/:id',
  EDIT = 'edit',
  VIEWS = '/views',
  FAVORITE = '/favorite',
  FAVORITE_IDS = '/favorite-ids',
  BUY = '/buy/:id',
  UPDATE = '/update/:id',
  AUCTION_PERMISSIONS = '/auction/permissions',
  AUCTION_LEAVE = '/auction/leave',
  SIMILAR = '/similar',
  POPULAR_LOTS = '/popular-lots',
  POPULAR_PRODUCTS = '/popular-products',
  SEARCH = '/search',
}

export enum ProfileApiRoutes {
  GET_USER_BY_ID = '/:userId',
  GET_FULL_USER_DATA = '/full-data',
  UPDATE_DATA = '/save',
  UPDATE_AVATAR = '/update-avatar',
  ADD_TO_ARCHIVE = '/add-to-archive',
  ADD_TO_POSTED = '/add-to-posted',
  GET_NOTIFICATIONS = '/notifications',
  PATCH_NOTIFICATION = '/notifications/:id',
  DELETE_ITEM = '/delete-item',
}

export enum AccountApiRoutes {
  PERSONAL_INFO = '/personal-info',
  MY_LIST = '/my-list',
}

export enum OrderApiRoutes {
  STATUS = '/status',
  SUCCESS = '/success',
  CREATE_PAYMENT = '/create-payment',
  ID = '/:id',
}
