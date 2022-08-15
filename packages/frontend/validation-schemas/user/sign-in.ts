import Joi from 'joi';
import { UserValidationMessage } from '@vse-bude/shared';

export const signInSchema = Joi.object({
  email: Joi.string()
    .trim()
    .email({ minDomainSegments: 2, tlds: { allow: false } })
    .required()
    .messages({
      'string.email': UserValidationMessage.EMAIL_WRONG,
      'string.empty': UserValidationMessage.EMAIL_REQUIRED,
    }),
  password: Joi.string().messages({
    'string.empty': UserValidationMessage.PASSWORD_REQUIRED,
  }),
});
