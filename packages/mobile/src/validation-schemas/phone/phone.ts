import * as Joi from 'joi';
import { TFunction } from 'i18next';
import { PHONE_NUMBER_REGEX } from '~/common/regexp/regexp';
import { VerifyPhoneRequestDto } from '~/common/types/types';

const getPhoneSchema = (
  t: TFunction,
): Joi.ObjectSchema<VerifyPhoneRequestDto> => {
  return Joi.object<VerifyPhoneRequestDto>({
    phone: Joi.string()
      .trim()
      .pattern(PHONE_NUMBER_REGEX)
      .required()
      .messages({
        'string.pattern.base': t('errors.WRONG_FORMAT'),
        'string.empty': t('errors.EMPTY_PHONE'),
      }),
  });
};

export { getPhoneSchema };
