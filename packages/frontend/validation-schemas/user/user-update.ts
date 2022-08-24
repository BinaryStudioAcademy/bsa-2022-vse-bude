import Joi from 'joi';
import { UserPersonalInfoValidationMessage } from '@vse-bude/shared';
import type { TFunction } from 'next-i18next';

export const userUpdateSchema = (t: TFunction) =>
  Joi.object({
    avatar: Joi.any().allow(''),

    firstName: Joi.string()
      .trim()
      .required()
      .min(2)
      .max(256)
      .messages({
        'string.min': t(UserPersonalInfoValidationMessage.FIRSTNAME_MIN),
        'string.max': t(UserPersonalInfoValidationMessage.FIRSTNAME_MAX),
        'string.empty': t(UserPersonalInfoValidationMessage.FIRSTNAME_REQUIRED),
      }),

    lastName: Joi.string()
      .trim()
      .required()
      .min(2)
      .max(256)
      .messages({
        'string.min': t(UserPersonalInfoValidationMessage.LASTNAME_MIN),
        'string.max': t(UserPersonalInfoValidationMessage.LASTNAME_MAX),
        'string.empty': t(UserPersonalInfoValidationMessage.LASTNAME_REQUIRED),
      }),

    email: Joi.string()
      .trim()
      .pattern(
        /([0-9a-z!#$%&'*+-/=?^_`{|}~.]{1,64})@([0-9a-z]+)\.([0-9a-z]{2,64})/,
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
      .pattern(/^\+\d{12,15}$/)
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
    instagram: Joi.string().allow(''),
    linkedin: Joi.string().allow(''),
    facebook: Joi.string().allow(''),

    password: Joi.string().allow(''),

    newPassword: Joi.string().when('password', {
      is: Joi.string().min(1),
      then: Joi.string()
        .required()
        .disallow(Joi.ref('password'))
        .pattern(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z~!@#$%^*\-_=+[{\]}/;:,.?]{8,16}$/,
        )
        .messages({
          'string.pattern.base': t(
            UserPersonalInfoValidationMessage.NEW_PASSWORD,
          ),
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
