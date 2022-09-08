import * as Joi from 'joi';
import { ResetPasswordLink } from '@vse-bude/shared';
import { t } from 'i18next';

const resetPassword = Joi.object<ResetPasswordLink>({
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': t('errors.INVALID_EMAIL'),
      'string.empty': t('errors.EMPTY_EMAIL'),
    }),
});

export { resetPassword };
