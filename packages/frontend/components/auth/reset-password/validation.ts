import Joi from 'joi';
import type { UpdatePassword } from '@vse-bude/shared';

export const verifyCodeSchema = Joi.object<UpdatePassword>({
  /* eslint-disable */
  password: Joi.string().trim().min(8).required(),
  repeatPassword: Joi.any().valid(Joi.ref('password')),
});
