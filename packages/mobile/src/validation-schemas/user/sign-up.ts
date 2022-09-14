import * as Joi from 'joi';
import { UserSignUpDto } from '@vse-bude/shared';
import i18next from 'i18next';
import { PHONE_NUMBER_REGEX } from '~/common/regexp/regexp';
import {
  emailValidator,
  nameValidator,
  passwordValidator,
} from '../helpers/helpers';

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
    .trim()
    .empty('')
    .pattern(PHONE_NUMBER_REGEX)
    .messages({
      'string.pattern.base': i18next.t('errors.WRONG_FORMAT_PHONE'),
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
