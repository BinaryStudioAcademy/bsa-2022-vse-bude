import * as Joi from 'joi';
import { UserSignInDto } from '@vse-bude/shared';
import i18next from 'i18next';

const signIn = Joi.object<UserSignInDto>({
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': i18next.t('errors.WRONG_EMAIL'),
      'string.empty': i18next.t('errors.EMPTY_EMAIL'),
    }),
  password: Joi.string()
    .trim()
    .required()
    .messages({
      'string.empty': i18next.t('errors.EMPTY_PASSWORD'),
    }),
});

export { signIn };
