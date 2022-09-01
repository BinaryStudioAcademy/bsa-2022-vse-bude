import Joi from 'joi';
import type { UserSignUpDto } from '@vse-bude/shared';
import { UserPersonalInfoValidationMessage } from '@vse-bude/shared';
import { ValidationRanges } from '@vse-bude/shared';
import type { TFunction } from 'next-i18next';

export const signUpSchema = (t: TFunction) =>
  Joi.object<UserSignUpDto>({
    firstName: Joi.string()
      .trim()
      .required()
      .pattern(/^[^-](([a-zA-Z]+)|([а-яёіїґєА-ЯЁIЇҐЄ]+))$/)
      .min(ValidationRanges.MIN_NAME_SYMBOLS)
      .max(ValidationRanges.MAX_NAME_SYMBOLS)
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
      .pattern(/^[^-](([a-zA-Z]+)|([а-яёіїґєА-ЯЁIЇҐЄ'-]+))[^-]$/)
      .min(ValidationRanges.MIN_NAME_SYMBOLS)
      .max(ValidationRanges.MAX_NAME_SYMBOLS)
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

    password: Joi.string()
      .required()
      .min(ValidationRanges.MIN_PASSWORD_SYMBOLS)
      .max(ValidationRanges.MAX_PASSWORD_SYMBOLS)
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
      }),

    repeatPassword: Joi.any()
      .valid(Joi.ref('password'))
      .messages({
        'any.only': t(UserPersonalInfoValidationMessage.DIFFERENT_PASSWORDS),
      }),
  });
