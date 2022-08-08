import * as Joi from 'joi';
import type { UserSignInDto } from '../../common/types';
import { UserValidationMessage } from '../../common/enums';
import { MIN_PASSWORD_LENGTH } from '../constants';

export const signIn = Joi.object<UserSignInDto>({
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': UserValidationMessage.EMAIL_WRONG,
      'string.empty': UserValidationMessage.EMAIL_REQUIRED,
    }),
  password: Joi.string().trim().min(MIN_PASSWORD_LENGTH).required().messages({
    'string.empty': UserValidationMessage.PASSWORD_REQUIRED,
  }),
});
