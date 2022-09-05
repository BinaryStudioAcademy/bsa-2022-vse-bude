import * as Joi from 'joi';
import i18next from 'i18next';
import { SaveUserProfileDto } from '@vse-bude/shared';
import { PHONE_NUMBER_REGEX } from '~/common/regexp/regexp';
import { emailValidator, nameValidator } from '../helpers/helpers';

const personalInfoSchema = Joi.object<SaveUserProfileDto>({
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
    .pattern(PHONE_NUMBER_REGEX)
    .trim()
    .empty('')
    .messages({
      'string.pattern.base': i18next.t('errors.WRONG_FORMAT'),
    }),
  country: Joi.string().empty(''),
  region: Joi.string().empty(''),
  city: Joi.string().empty(''),
  zip: Joi.string().empty(''),
  deliveryData: Joi.string().empty(''),
  instagram: Joi.string()
    .uri()
    .empty('')
    .messages({
      'string.uri': i18next.t('errors.WRONG_FORMAT'),
    }),
  linkedin: Joi.string()
    .uri()
    .empty('')
    .messages({
      'string.uri': i18next.t('errors.WRONG_FORMAT'),
    }),
  facebook: Joi.string()
    .uri()
    .empty('')
    .messages({
      'string.uri': i18next.t('errors.WRONG_FORMAT'),
    }),
  password: Joi.string().empty(''),
  newPassword: Joi.string().empty(''),
  repeatPassword: Joi.string().empty(''),
});

export { personalInfoSchema };
