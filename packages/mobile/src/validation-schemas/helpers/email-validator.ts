import * as Joi from 'joi';
import { TFunction } from 'i18next';
import { EMAIL_REGEX } from '~/common/regexp/regexp';

const emailValidator =
  (t: TFunction) => (value: string, helpers: Joi.CustomHelpers) => {
    if (value.match(/[а-яА-Я]/)) {
      return helpers.message({ custom: t('errors.LATIN') });
    }

    if (!value.match(EMAIL_REGEX)) {
      return helpers.message({ custom: t('errors.INVALID_EMAIL') });
    }

    return value;
  };

export { emailValidator };
