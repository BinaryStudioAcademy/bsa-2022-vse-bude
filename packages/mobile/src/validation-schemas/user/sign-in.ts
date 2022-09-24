import * as Joi from 'joi';
import { UserSignInDto } from '@vse-bude/shared';
import { TFunction } from 'i18next';

const getSignInSchema = (t: TFunction): Joi.ObjectSchema<UserSignInDto> => {
  return Joi.object<UserSignInDto>({
    email: Joi.string()
      .trim()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        'string.email': t('errors.WRONG_EMAIL'),
        'string.empty': t('errors.EMPTY_EMAIL'),
      }),
    password: Joi.string()
      .trim()
      .required()
      .messages({
        'string.empty': t('errors.EMPTY_PASSWORD'),
      }),
  });
};

export { getSignInSchema };
