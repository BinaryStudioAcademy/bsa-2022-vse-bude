import Joi from 'joi';
import type { PhoneVerifyDto } from '@vse-bude/shared';

export const verifyCodeSchema = Joi.object<PhoneVerifyDto>({
  code: Joi.string()
    .min(6)
    .max(6)
    .pattern(/[0-9]+/)
    .required(),
});
