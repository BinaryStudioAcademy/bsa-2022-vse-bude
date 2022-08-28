import * as Joi from 'joi';
import i18next from 'i18next';

const EMAIL_REGEX_PATTERN =
  /([0-9a-zA-Z!#$%&'*+-/=?^_`{|}~.]{3,64})@([0-9a-zA-Z]+)\.([0-9a-zA-Z]{2,64})/;

const emailValidator = (value: string, helpers: Joi.CustomHelpers) => {
  if (value.match(/[а-яА-Я]/)) {
    return helpers.message({ custom: i18next.t('errors.LATIN') });
  }

  if (!value.match(EMAIL_REGEX_PATTERN)) {
    return helpers.message({ custom: i18next.t('errors.INVALID_EMAIL') });
  }

  return value;
};

export { emailValidator };
