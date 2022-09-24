import * as Joi from 'joi';
import { UserSignUpDto } from '@vse-bude/shared';
import { TFunction } from 'i18next';
import { SHORT_PHONE_NUMBER_REGEX } from '~/common/regexp/regexp';
import {
  emailValidator,
  nameValidator,
  passwordValidator,
} from '../helpers/helpers';

const getSignUpSchema = (t: TFunction): Joi.ObjectSchema<UserSignUpDto> => {
  return Joi.object<UserSignUpDto>({
    email: Joi.string()
      .trim()
      .custom(emailValidator(t))
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        'string.empty': t('errors.EMPTY_EMAIL'),
      }),
    firstName: Joi.string()
      .trim()
      .custom(nameValidator('FIRST_NAME', t))
      .required()
      .messages({
        'string.empty': t('errors.EMPTY_FIRST_NAME'),
      }),
    lastName: Joi.string()
      .trim()
      .custom(nameValidator('LAST_NAME', t))
      .required()
      .messages({
        'string.empty': t('errors.EMPTY_LAST_NAME'),
      }),
    phone: Joi.string()
      .trim()
      .empty('')
      .pattern(SHORT_PHONE_NUMBER_REGEX)
      .messages({
        'string.pattern.base': t('errors.WRONG_FORMAT_PHONE'),
      }),
    password: Joi.string()
      .custom(passwordValidator)
      .trim()
      .required()
      .messages({
        'string.empty': t('errors.EMPTY_PASSWORD'),
      }),
    repeatPassword: Joi.string()
      .valid(Joi.ref('password'))
      .required()
      .messages({
        'string.empty': t('errors.EMPTY_PASSWORD'),
        'any.only': t('errors.REPEAT_PASSWORD_INVALID'),
      }),
  });
};

export { getSignUpSchema };
