import * as Joi from 'joi';
import { UserSignUpDto } from '@vse-bude/shared';
import i18next from 'i18next';
import {
  emailValidator,
  nameValidator,
  passwordValidator,
} from '../helpers/helpers';
import { PHONE_REGEX_PATTERN } from '../constants/constants';

const signUp = Joi.object<UserSignUpDto>({
  email: Joi.string()
    .trim()
    .custom(emailValidator)
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': i18next.t('errors.EMPTY_EMAIL'),
    }),
  firstName: Joi.string()
    .trim()
    .custom(nameValidator('FIRST_NAME'))
    .required()
    .messages({
      'string.empty': i18next.t('errors.EMPTY_FIRST_NAME'),
    }),
  lastName: Joi.string()
    .trim()
    .custom(nameValidator('LAST_NAME'))
    .required()
    .messages({
      'string.empty': i18next.t('errors.EMPTY_LAST_NAME'),
    }),
  phone: Joi.string()
    .pattern(PHONE_REGEX_PATTERN)
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
  repeatPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'string.empty': i18next.t('errors.EMPTY_PASSWORD'),
      'any.only': i18next.t('errors.REPEAT_PASSWORD_INVALID'),
    }),
});

export { signUp };
