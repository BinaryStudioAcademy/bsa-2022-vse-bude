import * as Joi from 'joi';
import i18next from 'i18next';
import { PLACE, SaveUserProfileDto, ZIP } from '@vse-bude/shared';
import { PHONE_NUMBER_REGEX } from '~/common/regexp/regexp';
import {
  MAX_COUNTRY_LENGTH,
  MAX_REGION_LENGTH,
  MAX_CITY_LENGTH,
  MAX_DELIVERY_DATA_LENGTH,
  MAX_SOCIAL_NETWORK_LENGTH,
} from '~/common/constants/constants';
import {
  emailValidator,
  nameValidator,
  passwordValidator,
} from '../helpers/helpers';

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
      'string.pattern.base': i18next.t('errors.WRONG_FORMAT_PHONE'),
    }),
  country: Joi.string()
    .empty('')
    .max(MAX_COUNTRY_LENGTH)
    .pattern(PLACE)
    .messages({
      'string.max': i18next.t('errors.MAX_COUNTRY_LENGTH'),
      'string.pattern.base': i18next.t('errors.PLACE_NAME'),
    }),
  region: Joi.string()
    .empty('')
    .max(MAX_REGION_LENGTH)
    .pattern(PLACE)
    .messages({
      'string.max': i18next.t('errors.MAX_REGION_LENGTH'),
      'string.pattern.base': i18next.t('errors.PLACE_NAME'),
    }),
  city: Joi.string()
    .empty('')
    .max(MAX_CITY_LENGTH)
    .pattern(PLACE)
    .messages({
      'string.max': i18next.t('errors.MAX_CITY_LENGTH'),
      'string.pattern.base': i18next.t('errors.PLACE_NAME'),
    }),
  zip: Joi.string()
    .empty('')
    .pattern(ZIP)
    .messages({
      'string.pattern.base': i18next.t('errors.INVALID_ZIP'),
    }),
  deliveryData: Joi.string()
    .empty('')
    .max(MAX_DELIVERY_DATA_LENGTH)
    .messages({
      'string.max': i18next.t('errors.MAX_DELIVERY_DATA_LENGTH'),
    }),
  instagram: Joi.string()
    .empty('')
    .uri()
    .max(MAX_SOCIAL_NETWORK_LENGTH)
    .messages({
      'string.uri': i18next.t('errors.INVALID_URI'),
      'string.max': i18next.t('errors.MAX_SOCIAL_NETWORK_LENGTH'),
    }),
  linkedin: Joi.string()
    .empty('')
    .uri()
    .max(MAX_SOCIAL_NETWORK_LENGTH)
    .messages({
      'string.uri': i18next.t('errors.INVALID_URI'),
      'string.max': i18next.t('errors.MAX_SOCIAL_NETWORK_LENGTH'),
    }),
  facebook: Joi.string()
    .empty('')
    .uri()
    .max(MAX_SOCIAL_NETWORK_LENGTH)
    .messages({
      'string.uri': i18next.t('errors.INVALID_URI'),
      'string.max': i18next.t('errors.MAX_SOCIAL_NETWORK_LENGTH'),
    }),
  password: Joi.string().empty(''),
  newPassword: Joi.string().empty('').custom(passwordValidator).trim(),
  repeatPassword: Joi.string()
    .empty('')
    .valid(Joi.ref('newPassword'))
    .messages({
      'any.only': i18next.t('errors.REPEAT_PASSWORD_INVALID'),
    }),
});

export { personalInfoSchema };
