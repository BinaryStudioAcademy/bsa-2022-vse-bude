import * as Joi from 'joi';
import { TFunction } from 'i18next';
import { PhoneVerifyDto } from '@vse-bude/shared';
import { VERIFICATION_CODE_REGEX } from '~/common/regexp/regexp';

const getCodeSchema = (t: TFunction): Joi.ObjectSchema<PhoneVerifyDto> => {
  return Joi.object<PhoneVerifyDto>({
    code: Joi.string()
      .pattern(VERIFICATION_CODE_REGEX)
      .trim()
      .required()
      .messages({
        'string.pattern.base': t('errors.WRONG_FORMAT'),
        'string.empty': t('errors.EMPTY_CODE'),
      }),
  });
};

export { getCodeSchema };
