import * as Joi from 'joi';
import i18next from 'i18next';
import { EMAIL_REGEX } from '~/common/regexp/regexp';

const emailValidator = (value: string, helpers: Joi.CustomHelpers) => {
  if (value.match(/[а-яА-Я]/)) {
    return helpers.message({ custom: i18next.t('errors.LATIN') });
  }

  if (!value.match(EMAIL_REGEX)) {
    return helpers.message({ custom: i18next.t('errors.INVALID_EMAIL') });
  }

  return value;
};

export { emailValidator };
