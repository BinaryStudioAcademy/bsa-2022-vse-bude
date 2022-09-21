import Joi from 'joi';
import type { PhoneVerifyDto } from '@vse-bude/shared';
import type { TFunction } from 'next-i18next';

export const createVerifyCodeSchema = (t: TFunction) =>
  Joi.object<PhoneVerifyDto>({
    code: Joi.string()
      .min(6)
      .max(6)
      .pattern(/[0-9]+/)
      .required()
      .messages({
        'string.empty': t('auth:validation.verification.emptyCode'),
        'string.min': t('auth:validation.verification.codeMinLength'),
        'string.max': t('auth:validation.verification.codeMaxLength'),
        'string.pattern': t('auth:validation.verification.codePattern'),
      }),
  });
