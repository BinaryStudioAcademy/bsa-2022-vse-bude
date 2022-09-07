import * as Joi from 'joi';
import i18next from 'i18next';
import { PHONE_NUMBER_REGEX } from '~/common/regexp/regexp';
import { VerifyPhoneRequestDto } from '~/common/types/types';

const phone = Joi.object<VerifyPhoneRequestDto>({
  phone: Joi.string()
    .trim()
    .pattern(PHONE_NUMBER_REGEX)
    .required()
    .messages({
      'string.pattern.base': i18next.t('errors.WRONG_FORMAT'),
      'string.empty': i18next.t('errors.EMPTY_PHONE'),
    }),
});

export { phone };
