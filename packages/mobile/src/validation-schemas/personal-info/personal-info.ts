import * as Joi from 'joi';
import { TFunction } from 'i18next';
import { PLACE, SaveUserProfileDto, ZIP } from '@vse-bude/shared';
import { SHORT_PHONE_NUMBER_REGEX } from '~/common/regexp/regexp';
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

const getPersonalInfoSchema = (
  t: TFunction,
): Joi.ObjectSchema<SaveUserProfileDto> => {
  return Joi.object<SaveUserProfileDto>({
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
    country: Joi.string()
      .empty('')
      .max(MAX_COUNTRY_LENGTH)
      .pattern(PLACE)
      .messages({
        'string.max': t('errors.MAX_COUNTRY_LENGTH'),
        'string.pattern.base': t('errors.PLACE_NAME'),
      }),
    region: Joi.string()
      .empty('')
      .max(MAX_REGION_LENGTH)
      .pattern(PLACE)
      .messages({
        'string.max': t('errors.MAX_REGION_LENGTH'),
        'string.pattern.base': t('errors.PLACE_NAME'),
      }),
    city: Joi.string()
      .empty('')
      .max(MAX_CITY_LENGTH)
      .pattern(PLACE)
      .messages({
        'string.max': t('errors.MAX_CITY_LENGTH'),
        'string.pattern.base': t('errors.PLACE_NAME'),
      }),
    zip: Joi.string()
      .empty('')
      .pattern(ZIP)
      .messages({
        'string.pattern.base': t('errors.INVALID_ZIP'),
      }),
    deliveryData: Joi.string()
      .empty('')
      .max(MAX_DELIVERY_DATA_LENGTH)
      .messages({
        'string.max': t('errors.MAX_DELIVERY_DATA_LENGTH'),
      }),
    instagram: Joi.string()
      .empty('')
      .uri()
      .max(MAX_SOCIAL_NETWORK_LENGTH)
      .messages({
        'string.uri': t('errors.INVALID_URI'),
        'string.max': t('errors.MAX_SOCIAL_NETWORK_LENGTH'),
      }),
    linkedin: Joi.string()
      .empty('')
      .uri()
      .max(MAX_SOCIAL_NETWORK_LENGTH)
      .messages({
        'string.uri': t('errors.INVALID_URI'),
        'string.max': t('errors.MAX_SOCIAL_NETWORK_LENGTH'),
      }),
    facebook: Joi.string()
      .empty('')
      .uri()
      .max(MAX_SOCIAL_NETWORK_LENGTH)
      .messages({
        'string.uri': t('errors.INVALID_URI'),
        'string.max': t('errors.MAX_SOCIAL_NETWORK_LENGTH'),
      }),
    password: Joi.string().empty(''),
    newPassword: Joi.string().empty('').custom(passwordValidator).trim(),
    repeatPassword: Joi.string()
      .empty('')
      .valid(Joi.ref('newPassword'))
      .messages({
        'any.only': t('errors.REPEAT_PASSWORD_INVALID'),
      }),
  });
};

export { getPersonalInfoSchema };
