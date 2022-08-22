import * as Joi from 'joi';
import { UserValidationMessage, UserSignUpDto } from '@vse-bude/shared';

const signUp = Joi.object<UserSignUpDto>({
  email: Joi.string()
    .trim()
    .pattern(
      /([0-9a-z!#$%&'*+-/=?^_`{|}~.]{1,64})@([0-9a-z]+)\.([0-9a-z]{3,64})/,
    )
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.pattern.base': UserValidationMessage.EMAIL_WRONG,
      'string.email': UserValidationMessage.EMAIL_WRONG,
      'string.empty': UserValidationMessage.EMAIL_REQUIRED,
    }),
  firstName: Joi.string().trim().required().messages({
    'string.empty': UserValidationMessage.NAME_REQUIRED,
  }),
  lastName: Joi.string().trim().required().messages({
    'string.empty': UserValidationMessage.NAME_REQUIRED,
  }),
  phone: Joi.string()
    .pattern(/^\+380\d{3}\d{2}\d{2}\d{2}$/)
    .trim()
    .required()
    .messages({
      'string.pattern.base': 'Format phone must be next: +380XXXXXXXXX',
      'string.empty': '',
    }),
  password: Joi.string()
    .pattern(/([0-9a-zA-Z!#$%&'*+-/=?^_`{|}~.]{8,16})/)
    .trim()
    .required()
    .messages({
      'string.pattern.base': UserValidationMessage.PASSWORD_REQUIRED,
      'string.password': UserValidationMessage.PASSWORD_REQUIRED,
      'string.empty': UserValidationMessage.PASSWORD_REQUIRED,
    }),
  repeatPassword: Joi.any().valid(Joi.ref('password')).required().messages({
    'string.empty': UserValidationMessage.PASSWORD_REQUIRED,
    'any.only': 'Must match password',
  }),
});

export { signUp };
