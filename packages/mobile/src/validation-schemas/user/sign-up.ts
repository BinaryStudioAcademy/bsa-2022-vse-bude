import * as Joi from 'joi';
import { UserValidationMessage, UserSignUpDto } from '@vse-bude/shared';
import { t } from 'i18next';

const signUp = Joi.object<UserSignUpDto>({
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': UserValidationMessage.EMAIL_WRONG,
      'string.empty': UserValidationMessage.EMAIL_REQUIRED,
    }),
  firstName: Joi.string().trim().required().messages({
    'string.empty': UserValidationMessage.NAME_REQUIRED,
  }),
  password: Joi.string()
    .trim()
    .min(8)
    .max(16)
    .regex(/^[^ ]*$/)
    .message(t('verification.PASSWORD_NO_SPACES'))
    .regex(/^[a-zA-Z0-9!~@#$%*_=+{}?;:,./[\]\\^-]*$/)
    .message(t('verification.PASSWORD_INVALID'))
    .regex(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!~@#$%*_=+{}?;:,./[\]\\^-]{8,16}$/,
    )
    .message(t('verification.PASSWORD_REQUIREMENTS'))
    .required()
    .messages({
      'string.empty': t('verification.PASSWORD_EMPTY'),
      'string.min': t('verification.PASSWORD_SHORT'),
      'string.max': t('verification.PASSWORD_LONG'),
      'string.space': 'space',
    }),
  repeatPassword: Joi.any()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': t('verification.PASSWORD_NOT_MATCH'),
    }),
});

export { signUp };
