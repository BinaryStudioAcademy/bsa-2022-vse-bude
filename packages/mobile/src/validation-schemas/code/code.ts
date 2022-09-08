import * as Joi from 'joi';
import i18next from 'i18next';
import { PhoneVerifyDto } from '@vse-bude/shared';
import { PHONE_VERIFICATION_CODE_REGEX } from '~/common/regexp/regexp';

const codeSchema = Joi.object<PhoneVerifyDto>({
  code: Joi.string()
    .pattern(PHONE_VERIFICATION_CODE_REGEX)
    .trim()
    .required()
    .messages({
      'string.pattern.base': i18next.t('errors.WRONG_FORMAT'),
      'string.empty': i18next.t('errors.EMPTY_CODE'),
    }),
});

export { codeSchema };
