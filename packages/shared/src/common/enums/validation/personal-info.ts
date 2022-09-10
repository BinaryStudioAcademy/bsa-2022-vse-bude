export enum UserPersonalInfoValidationMessage {
  FIRSTNAME_PATTERN = 'personal-info:validation.personal.firstNamePattern',
  FIRSTNAME_REQUIRED = 'personal-info:validation.personal.firstnameRequired',
  FIRSTNAME_MIN = 'personal-info:validation.personal.firstnameMin',
  FIRSTNAME_MAX = 'personal-info:validation.personal.firstnameMax',
  LASTNAME_PATTERN = 'personal-info:validation.personal.firstNamePattern',
  LASTNAME_REQUIRED = 'personal-info:validation.personal.lastnameRequired',
  LASTNAME_MIN = 'personal-info:validation.personal.lastnameMin',
  LASTNAME_MAX = 'personal-info:validation.personal.lastnameMax',

  EMAIL_REQUIRED = 'personal-info:validation.personal.emailRequired',
  EMAIL_PATTERN = 'personal-info:validation.personal.emailPattern',

  PHONE_PATTERN = 'personal-info:validation.personal.phonePattern',

  PLACE_NAME = 'personal-info:validation.address.placeName',
  COUNTRY = 'personal-info:validation.address.country',
  REGION = 'personal-info:validation.address.region',
  CITY = 'personal-info:validation.address.city',
  ZIP = 'personal-info:validation.address.zip',
  DELIVERY_DATA = 'personal-info:validation.address.deliveryData',

  IS_URI = 'personal-info:validation.socialNetworks.uri',
  URI_MAX_SYMBOLS = 'personal-info:validation.socialNetworks.maxSymbols',
  URI_BAD_REQUEST = 'personal-info:validation.socialNetworks.netType',

  MIN_SYMBOLS = 'personal-info:validation.password.minSymbols',
  MAX_SYMBOLS = 'personal-info:validation.password.maxSymbols',
  WRONG_PASSWORD = 'personal-info:validation.password.wrongPassword',
  EMPTY_PASSWORD = 'personal-info:validation.password.emptyPassword',
  NEW_PASSWORD = 'personal-info:validation.password.newPasswordPattern',
  DIFFERENT_PASSWORDS = 'personal-info:validation.password.differentPasswords',
  SAME_PASSWORD = 'personal-info:validation.password.samePassword',

  USER_NOT_EXISTS = 'personal-info:validation.notExists.user',
  PHONE_EXISTS = 'personal-info:validation.exists.phone',
}
