import Joi from 'joi';
import { UserValidationMessage } from '@vse-bude/shared';

export const PersonalInfoSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    //.pattern(/^([a-zA-Z | \u0400-\u052F\u2DE0-\u2DFF\uA640-\uA69F'])$/)
    .min(2)
    .max(256)
    .required()
    .messages({
      'string.pattern.base': `"a" should be a type of 'text'`,
      'string.min': `"a" should be a type of 'text'`,
      'string.max': `"a" should be a type of 'text'`,
      'string.empty': `"a" cannot be an empty field`,
      'any.required': `"a" is a required field`,
    }),
  lastName: Joi.string()
    .trim()
    //.pattern(/^([a-zA-Z | \u0400-\u052F\u2DE0-\u2DFF\uA640-\uA69F']{2,256})$/)
    .min(2)
    .max(256)
    .required()
    .messages({
      'string.pattern.base': 'error',
      'string.name': 'not name',
      'string.empty': 'empty',
    }),
  email: Joi.string()
    .trim()
    .pattern(
      /([0-9a-z!#$%&'*+-/=?^_`{|}~.]{3,64})@([0-9a-z]+)\.([0-9a-z]{3,64})/,
    )
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.pattern.base': UserValidationMessage.EMAIL_WRONG,
      'string.email': UserValidationMessage.EMAIL_WRONG,
      'string.empty': UserValidationMessage.EMAIL_REQUIRED,
    }),
  //phone:
  //novaposhta: '',
  //instagram: '',
  //linkedin: '',
  //facebook: '',
  //currentPassword: '',
  //newPassword: '',
  //repeatPassword: '',
  //country: '',
  //region: '',
  //city: '',
  //zipCode: '',

  currentPassword: Joi.string()
    .pattern(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z~!@#$%^*\-_=+[{]}\/;:,.?]{8,16}$/,
    )
    .messages({
      'string.pattern.base': UserValidationMessage.PASSWORD_REQUIRED,
      'string.password': UserValidationMessage.PASSWORD_REQUIRED,
      'string.empty': UserValidationMessage.PASSWORD_REQUIRED,
    }),
  newPassword: Joi.string()
    .pattern(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z~!@#$%^*\-_=+[{]}\/;:,.?]{8,16}$/,
    )
    .messages({
      'string.pattern.base': UserValidationMessage.PASSWORD_REQUIRED,
      'string.password': UserValidationMessage.PASSWORD_REQUIRED,
      'string.empty': UserValidationMessage.PASSWORD_REQUIRED,
    }),
  repeatPassword: Joi.string()
    .pattern(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z~!@#$%^*\-_=+[{]}\/;:,.?]{8,16}$/,
    )
    .messages({
      'string.pattern.base': UserValidationMessage.PASSWORD_REQUIRED,
      'string.password': UserValidationMessage.PASSWORD_REQUIRED,
      'string.empty': UserValidationMessage.PASSWORD_REQUIRED,
    }),
});

// Требования по валидации поля номер телефона"Total max length 16
// Plus symbol (only first)
// numbers(0-9)
// International format +xxxYYYYYYYYYYYY"
// Критерии прописаны в тикете "Create account "
