import Joi from 'joi';
import type { TFunction } from 'next-i18next';
import type { UserSignUpDto } from '@vse-bude/shared';
import {
  UserPersonalInfoValidationMessage,
  ValidationRanges,
  NAME,
  PASSWORD,
  EMAIL,
  PHONE,
} from '@vse-bude/shared';

export const signUpSchema = (t: TFunction) =>
  Joi.object<UserSignUpDto>({
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
      .pattern(PHONE)
      .messages({
        'string.pattern.base': t(
          UserPersonalInfoValidationMessage.PHONE_PATTERN,
        ),
      }),

    password: Joi.string()
      .required()
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
      }),

    repeatPassword: Joi.any()
      .valid(Joi.ref('password'))
      .messages({
        'any.only': t(UserPersonalInfoValidationMessage.DIFFERENT_PASSWORDS),
      }),
  });
