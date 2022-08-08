import * as Joi from 'joi';
import type { UserSignUpDto } from '../../common/types';
import { UserValidationMessage } from '../../common/enums';

const signUp = Joi.object<UserSignUpDto>({
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': UserValidationMessage.EMAIL_WRONG,
      'string.empty': UserValidationMessage.EMAIL_REQUIRED,
    }),
  name: Joi.string().trim().required().messages({
    'string.empty': UserValidationMessage.NAME_REQUIRED,
  }),
  password: Joi.string().trim().required().messages({
    'string.empty': UserValidationMessage.PASSWORD_REQUIRED,
  }),
});

export { signUp };
