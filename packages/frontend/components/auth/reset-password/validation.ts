import Joi from 'joi';
import type { ResetPasswordLink } from '@vse-bude/shared';

export const verifyCodeSchema = Joi.object<ResetPasswordLink>({
  email: Joi.string().email().required(),
});
