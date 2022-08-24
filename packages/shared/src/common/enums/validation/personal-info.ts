export enum UserPersonalInfoValidationMessage {
  FIRSTNAME_REQUIRED = 'personal-info:validation.personal.firstnameRequired',
  FIRSTNAME_MIN = 'personal-info:validation.personal.firstnameMin',
  FIRSTNAME_MAX = 'personal-info:validation.personal.firstnameMax',
  LASTNAME_REQUIRED = 'personal-info:validation.personal.lastnameRequired',
  LASTNAME_MIN = 'personal-info:validation.personal.lastnameMin',
  LASTNAME_MAX = 'personal-info:validation.personal.lastnameMax',

  EMAIL_REQUIRED = 'personal-info:validation.personal.emailRequired',
  EMAIL_PATTERN = 'personal-info:validation.personal.emailPattern',
  PHONE_REQUIRED = 'personal-info:validation.personal.phoneRequired',
  PHONE_PATTERN = 'personal-info:validation.personal.phonePattern',

  MIN_SYMBOLS = 'personal-info:validation.password.minSymbols',
  MAX_SYMBOLS = 'personal-info:validation.password.maxSymbols',
  CYRILLIC = 'personal-info:validation.password.cyrillic',
  WRONG_PASSWORD = 'personal-info:validation.password.wrongPassword',
  EMPTY_PASSWORD = 'personal-info:validation.password.emptyPassword',
  NEW_PASSWORD = 'personal-info:validation.password.newPasswordPattern',
  SPACES_IN_PASSWORD = 'personal-info:validation.password.spacesInPassword',
  DIFFERENT_PASSWORDS = 'personal-info:validation.password.differentPasswords',
  SAME_PASSWORD = 'personal-info:validation.password.samePassword',
}
