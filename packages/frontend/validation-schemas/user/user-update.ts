import Joi from 'joi';
import { UserPersonalInfoValidationMessage } from '@vse-bude/shared';
import type { TFunction } from 'next-i18next';

export const userUpdateSchema = (t: TFunction) =>
  Joi.object({
    firstName: Joi.string()
      .trim()
      .required()
      .pattern(/^[^-](([a-zA-Z]+)|([а-яёіїґєА-ЯЁIЇҐЄ]+))$/)
      .min(1)
      .max(40)
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
      .pattern(/^[^-](([a-zA-Z]+)|([а-яёіїґєА-ЯЁIЇҐЄ]+))$/)
      .min(1)
      .max(40)
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
      .pattern(
        /^(([^.]([a-zA-Z\d!#$%&'*+\-/=?^_`{|}~]{1,32})(.[^.]([a-zA-Z\d!#$%&'*+\-/=?^_`{|}~]{1,31}))*)|([a-zA-Z\d!#$%&'*+\-/=?^_`{|}~]{1,64}))@[^-]([\da-zA-Z-]{1,63}\.)([a-zA-Z]{2,6})$/,
      )
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
      .trim()
      .pattern(/^((\+\d{12,15})|(\+380\d{9}))$/)
      .required()
      .messages({
        'string.pattern.base': t(
          UserPersonalInfoValidationMessage.PHONE_PATTERN,
        ),
        'string.empty': t(UserPersonalInfoValidationMessage.PHONE_REQUIRED),
      }),

    country: Joi.string().allow(''),
    region: Joi.string().allow(''),
    city: Joi.string().allow(''),
    zip: Joi.string().allow(''),
    novaPoshtaRef: Joi.string().allow(''),

    instagram: Joi.string()
      .allow('')
      .uri()
      .max(150)
      .messages({
        'string.uri': t(UserPersonalInfoValidationMessage.IS_URI),
        'string.max': t(UserPersonalInfoValidationMessage.URI_MAX_SYMBOLS),
      }),
    linkedin: Joi.string()
      .allow('')
      .uri()
      .max(150)
      .messages({
        'string.uri': t(UserPersonalInfoValidationMessage.IS_URI),
        'string.max': t(UserPersonalInfoValidationMessage.URI_MAX_SYMBOLS),
      }),
    facebook: Joi.string()
      .allow('')
      .uri()
      .max(150)
      .messages({
        'string.uri': t(UserPersonalInfoValidationMessage.IS_URI),
        'string.max': t(UserPersonalInfoValidationMessage.URI_MAX_SYMBOLS),
      }),

    password: Joi.string().allow(''),

    newPassword: Joi.string().when('password', {
      is: Joi.string().min(1),
      then: Joi.string()
        .required()
        .disallow(Joi.ref('password'))
        .min(8)
        .max(16)
        .pattern(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z~!@#$%^*\-_=+[{\]}/;:,.?]+$/,
        )
        .messages({
          'string.pattern.base': t(
            UserPersonalInfoValidationMessage.NEW_PASSWORD,
          ),
          'string.min': t(UserPersonalInfoValidationMessage.MIN_SYMBOLS),
          'string.max': t(UserPersonalInfoValidationMessage.MAX_SYMBOLS),
          'string.empty': t(UserPersonalInfoValidationMessage.EMPTY_PASSWORD),
          'any.invalid': t(UserPersonalInfoValidationMessage.SAME_PASSWORD),
        }),
      otherwise: Joi.string().allow(''),
    }),

    repeatPassword: Joi.any()
      .valid(Joi.ref('newPassword'))
      .messages({
        'any.only': t(UserPersonalInfoValidationMessage.DIFFERENT_PASSWORDS),
      }),
  });