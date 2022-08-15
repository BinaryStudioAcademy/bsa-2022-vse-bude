import Joi from 'joi';
import type { UserSignInDto } from '@vse-bude/shared';
import { UserValidationMessage } from '@vse-bude/shared';

export const signInSchema = Joi.object<UserSignInDto>({
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
  password: Joi.string()
    .pattern(/([0-9a-zA-Z.]{8,16})/)
    .required()
    .messages({
      'string.pattern.base': UserValidationMessage.PASSWORD_REQUIRED,
      'string.password': UserValidationMessage.PASSWORD_REQUIRED,
      'string.empty': UserValidationMessage.PASSWORD_REQUIRED,
    }),
});
