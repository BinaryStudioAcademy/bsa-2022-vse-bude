import * as Joi from 'joi';
import { UserValidationMessage, UserSignInDto } from '@vse-bude/shared';

const signIn = Joi.object<UserSignInDto>({
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': UserValidationMessage.EMAIL_WRONG,
      'string.empty': UserValidationMessage.EMAIL_REQUIRED,
    }),
  password: Joi.string().trim().required().messages({
    'string.empty': UserValidationMessage.PASSWORD_REQUIRED,
  }),
});

export { signIn };
