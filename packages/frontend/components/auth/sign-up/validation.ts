export const phoneMask = /\+380[1-9][0-9]{8}/;

export const minPasswordLength = 6;

import Joi from 'joi';
import type { UserSignUpDto } from '@vse-bude/shared';

export const signUpSchema = Joi.object<UserSignUpDto>({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  phone: Joi.string()
    .required()
    .pattern(phoneMask),
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(minPasswordLength).required(),
  repeatPassword: Joi.any().valid(Joi.ref('password')),
});
