import * as Joi from 'joi';
import i18next from 'i18next';
import {
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
} from '~/common/constants/constants';
import { PASSWORD_REGEX } from '~/common/regexp/regexp';

const passwordValidator = (value: string, helpers: Joi.CustomHelpers) => {
  const hasUppercase = value.match(/[A-Z]/);
  const hasLowercases = value.match(/[a-z]/);
  const hasNumber = value.match(/[0-9]/);

  if (value.match(/[а-яА-Я]/)) {
    return helpers.message({ custom: i18next.t('errors.LATIN') });
  }

  if (value.match(/\s/)) {
    return helpers.message({ custom: i18next.t('errors.SPACES') });
  }

  if (value.length < MIN_PASSWORD_LENGTH) {
    return helpers.message({
      custom: i18next.t('errors.MIN_PASSWORD_LENGTH'),
    });
  }

  if (value.length > MAX_PASSWORD_LENGTH) {
    return helpers.message({
      custom: i18next.t('errors.MAX_PASSWORD_LENGTH'),
    });
  }

  if (!hasUppercase || !hasLowercases || !hasNumber) {
    return helpers.message({
      custom: i18next.t('errors.UP_LOW_NUM'),
    });
  }

  if (!value.match(PASSWORD_REGEX)) {
    return helpers.message({ custom: i18next.t('errors.INVALID_PASSWORD') });
  }

  return value;
};

export { passwordValidator };
