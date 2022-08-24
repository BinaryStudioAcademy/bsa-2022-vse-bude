import * as Joi from 'joi';
import { UserSignUpDto } from '@vse-bude/shared';
import i18next from 'i18next';

const emailValidator = (value: string, helpers: Joi.CustomHelpers) => {
  if (value.match(/[а-яА-Я]/)) {
    return helpers.message({ custom: i18next.t('errors.LATIN') });
  }

  if (
    !value.match(
      /([0-9a-zA-Z!#$%&'*+-/=?^_`{|}~.]{3,64})@([0-9a-zA-Z]+)\.([0-9a-zA-Z]{2,64})/,
    )
  ) {
    return helpers.message({ custom: i18next.t('errors.INVALID_EMAIL') });
  }

  return value;
};

const passwordValidator = (value: string, helpers: Joi.CustomHelpers) => {
  const isUppercase = value.match(/[A-Z]/);
  const isLowercases = value.match(/[a-z]/);
  const isNumber = value.match(/[0-9]/);

  if (value.match(/[а-яА-Я]/)) {
    return helpers.message({ custom: i18next.t('errors.LATIN') });
  }

  if (value.match(/\s/)) {
    return helpers.message({ custom: i18next.t('errors.SPACES') });
  }

  if (value.length < 8) {
    return helpers.message({
      custom: i18next.t('errors.LENGTH_8'),
    });
  }

  if (value.length > 16) {
    return helpers.message({
      custom: i18next.t('errors.LENGTH_16'),
    });
  }

  if (!isUppercase || !isLowercases || !isNumber) {
    return helpers.message({
      custom: i18next.t('errors.UP_LOW_NUM'),
    });
  }

  if (!value.match(/([0-9a-zA-Z!#$%&'*+-/=?^_`{|}~.]{8,16})/)) {
    return helpers.message({ custom: i18next.t('errors.INVALID_PASSWORD') });
  }

  return value;
};

const firstNameValidator = (value: string, helpers: Joi.CustomHelpers) => {
  if (value.length < 1) {
    return helpers.message({
      custom: i18next.t('errors.FIRST_NAME_LENGTH_1'),
    });
  }

  if (value.length > 40) {
    return helpers.message({
      custom: i18next.t('errors.FIRST_NAME_LENGTH_40'),
    });
  }

  if (value.match(/[~!@#$%^*_=+[{]}\/;:,.?]/)) {
    return helpers.message({
      custom: i18next.t('errors.FIRST_NAME_INVALID'),
    });
  }

  if (value.match(/^-|-$/)) {
    return helpers.message({ custom: i18next.t('errors.FIRST_NAME_INVALID') });
  }

  return value;
};

const lastNameValidator = (value: string, helpers: Joi.CustomHelpers) => {
  if (value.length < 1) {
    return helpers.message({
      custom: i18next.t('errors.LAST_NAME_LENGTH_1'),
    });
  }

  if (value.length > 40) {
    return helpers.message({
      custom: i18next.t('errors.LAST_NAME_LENGTH_40'),
    });
  }

  if (value.match(/[~!@#$%^*_=+[{]}\/;:,.?]/)) {
    return helpers.message({
      custom: i18next.t('errors.LAST_NAME_INVALID'),
    });
  }

  if (value.match(/^-|-$/)) {
    return helpers.message({ custom: i18next.t('errors.LAST_NAME_INVALID') });
  }

  return value;
};

const signUp = Joi.object<UserSignUpDto>({
  email: Joi.string()
    .trim()
    .custom(emailValidator, 'custom validation')
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': i18next.t('errors.EMPTY_EMAIL'),
    }),
  firstName: Joi.string()
    .trim()
    .custom(firstNameValidator, 'custom validation')
    .required()
    .messages({
      'string.empty': i18next.t('errors.EMPTY_FIRST_NAME'),
    }),
  lastName: Joi.string()
    .trim()
    .custom(lastNameValidator, 'custom validation')
    .required()
    .messages({
      'string.empty': i18next.t('errors.EMPTY_LAST_NAME'),
    }),
  phone: Joi.string()
    .pattern(/^\+\d{8,15}$/)
    .trim()
    .required()
    .messages({
      'string.pattern.base': 'Wrong format',
      'string.empty': i18next.t('errors.EMPTY_PHONE'),
    }),
  password: Joi.string()
    .custom(passwordValidator)
    .trim()
    .required()
    .messages({
      'string.empty': i18next.t('errors.EMPTY_PASSWORD'),
    }),
  repeatPassword: Joi.any()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'string.empty': i18next.t('errors.EMPTY_PASSWORD'),
      'any.only': i18next.t('errors.REPEAT_PASSWORD_INVALID'),
    }),
});

export { signUp };
