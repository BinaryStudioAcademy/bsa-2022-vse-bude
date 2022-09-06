import Joi from 'joi';
import type { TFunction } from 'next-i18next';
import {
  UserPersonalInfoValidationMessage,
  ValidationRanges,
  NAME,
  PASSWORD,
  EMAIL,
  PERSONAL_PHONE,
  PLACE,
  ZIP,
} from '@vse-bude/shared';

export const userUpdateSchema = (t: TFunction) =>
  Joi.object({
    firstName: Joi.string()
      .trim()
      .required()
      .min(ValidationRanges.MIN_NAME_SYMBOLS)
      .max(ValidationRanges.MAX_NAME_SYMBOLS)
      .pattern(NAME)
      .messages({
        'string.pattern.base': t(
          UserPersonalInfoValidationMessage.FIRSTNAME_PATTERN,
        ),
        'string.min': t(UserPersonalInfoValidationMessage.FIRSTNAME_MIN),
        'string.max': t(UserPersonalInfoValidationMessage.FIRSTNAME_MAX),
        'string.empty': t(UserPersonalInfoValidationMessage.FIRSTNAME_REQUIRED),
      }),
    lastName: Joi.string()
      .trim()
      .required()
      .min(ValidationRanges.MIN_NAME_SYMBOLS)
      .max(ValidationRanges.MAX_NAME_SYMBOLS)
      .pattern(NAME)
      .messages({
        'string.pattern.base': t(
          UserPersonalInfoValidationMessage.LASTNAME_PATTERN,
        ),
        'string.min': t(UserPersonalInfoValidationMessage.LASTNAME_MIN),
        'string.max': t(UserPersonalInfoValidationMessage.LASTNAME_MAX),
        'string.empty': t(UserPersonalInfoValidationMessage.LASTNAME_REQUIRED),
      }),
    email: Joi.string()
      .trim()
      .pattern(EMAIL)
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        'string.pattern.base': t(
          UserPersonalInfoValidationMessage.EMAIL_PATTERN,
        ),
        'string.email': t(UserPersonalInfoValidationMessage.EMAIL_REQUIRED),
        'string.empty': t(UserPersonalInfoValidationMessage.EMAIL_REQUIRED),
      }),
    phone: Joi.string()
      .allow('')
      .replace('+380', '')
      .pattern(PERSONAL_PHONE)
      .messages({
        'string.pattern.base': t(
          UserPersonalInfoValidationMessage.PHONE_PATTERN,
        ),
      }),

    country: Joi.string()
      .allow('')
      .max(ValidationRanges.MAX_COUNTRY_SYMBOLS)
      .pattern(PLACE)
      .messages({
        'string.max': t(UserPersonalInfoValidationMessage.COUNTRY),
        'string.pattern.base': t(UserPersonalInfoValidationMessage.PLACE_NAME),
      }),
    region: Joi.string()
      .allow('')
      .max(ValidationRanges.MAX_REGION_SYMBOLS)
      .pattern(PLACE)
      .messages({
        'string.max': t(UserPersonalInfoValidationMessage.REGION),
        'string.pattern.base': t(UserPersonalInfoValidationMessage.PLACE_NAME),
      }),
    city: Joi.string()
      .allow('')
      .max(ValidationRanges.MAX_CITY_SYMBOLS)
      .pattern(PLACE)
      .messages({
        'string.max': t(UserPersonalInfoValidationMessage.CITY),
        'string.pattern.base': t(UserPersonalInfoValidationMessage.PLACE_NAME),
      }),
    zip: Joi.string()
      .allow('')
      .pattern(ZIP)
      .messages({
        'string.pattern.base': t(UserPersonalInfoValidationMessage.ZIP),
      }),
    deliveryData: Joi.string()
      .allow('')
      .max(ValidationRanges.MAX_DELIVERY_DATA)
      .messages({
        'string.max': t(UserPersonalInfoValidationMessage.DELIVERY_DATA),
      }),

    instagram: Joi.string()
      .allow('')
      .uri()
      .max(ValidationRanges.MAX_SOCIAL_NETWORK_URI_SYMBOLS)
      .messages({
        'string.uri': t(UserPersonalInfoValidationMessage.IS_URI),
        'string.max': t(UserPersonalInfoValidationMessage.URI_MAX_SYMBOLS),
      }),
    linkedin: Joi.string()
      .allow('')
      .uri()
      .max(ValidationRanges.MAX_SOCIAL_NETWORK_URI_SYMBOLS)
      .messages({
        'string.uri': t(UserPersonalInfoValidationMessage.IS_URI),
        'string.max': t(UserPersonalInfoValidationMessage.URI_MAX_SYMBOLS),
      }),
    facebook: Joi.string()
      .allow('')
      .uri()
      .max(ValidationRanges.MAX_SOCIAL_NETWORK_URI_SYMBOLS)
      .messages({
        'string.uri': t(UserPersonalInfoValidationMessage.IS_URI),
        'string.max': t(UserPersonalInfoValidationMessage.URI_MAX_SYMBOLS),
      }),

    password: Joi.string().allow(''),

    newPassword: Joi.string()
      .allow('')
      .disallow(Joi.ref('password'))
      .min(ValidationRanges.MIN_PASSWORD_SYMBOLS)
      .max(ValidationRanges.MAX_PASSWORD_SYMBOLS)
      .pattern(PASSWORD)
      .messages({
        'string.pattern.base': t(
          UserPersonalInfoValidationMessage.NEW_PASSWORD,
        ),
        'string.min': t(UserPersonalInfoValidationMessage.MIN_SYMBOLS),
        'string.max': t(UserPersonalInfoValidationMessage.MAX_SYMBOLS),
        'string.empty': t(UserPersonalInfoValidationMessage.EMPTY_PASSWORD),
        'any.invalid': t(UserPersonalInfoValidationMessage.SAME_PASSWORD),
      }),

    repeatPassword: Joi.any()
      .valid(Joi.ref('newPassword'))
      .messages({
        'any.only': t(UserPersonalInfoValidationMessage.DIFFERENT_PASSWORDS),
      }),
  });
