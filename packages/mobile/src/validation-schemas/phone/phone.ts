import * as Joi from 'joi';
import i18next from 'i18next';
import { PHONE_NUMBER_REGEX } from '~/common/regexp/regexp';
import { VerifyPhone } from '~/common/types/types';

const phone = Joi.object<VerifyPhone>({
  phone: Joi.string()
    .pattern(PHONE_NUMBER_REGEX)
    .trim()
    .required()
    .messages({
      'string.pattern.base': i18next.t('errors.WRONG_FORMAT'),
      'string.empty': i18next.t('errors.EMPTY_PHONE'),
    }),
});

export { phone };
