export enum Routes {
  DEFAULT = '/',
  USERS = '/users',
  SIGN_UP = '/sign-up',
  SIGN_IN = '/sign-in',
  USER_ACCOUNT = '/account',
  PROFILE = '/profile',
  FORGOT_PASSWORD = '/forgot-password',
  PHONE_VERIFY = '/auth/phone-verify',
  EMAIL_VERIFY = '/auth/email-verify',
  ITEMS = '/items',
  SEARCH = '/search',
  NEWS = '/news',
  ABOUT = '/about',
  CATEGORIES = '/categories',
  NOT_FOUND = '/404',
  RULES = '/rules',
  ORDERS = '/orders',
  CHECKOUT = '/orders/checkout',
}

export enum ProfileRoutes {
  PERSONAL_INFO = '/',
  LIST = '/my-list',
  ACCOUNT_SETTINGS = '/settings',
  MESSAGES = '/messages',
  SUPPORT = '/support',
  NOTIFICATIONS = '/notifications',
}

export enum ItemRoutes {
  CREATE = '/create',
  CREATE_AUCTION = '/create-auction',
  CREATE_DIRECT_SALE = '/create-product',
  EDIT = '/edit',
}
