import Joi from 'joi';
import { UserPersonalInfoValidationMessage } from '@vse-bude/shared';

export const userUpdateSchema = Joi.object().keys({
  avatar: Joi.string(),

  firstName: Joi.string().trim().required().min(2)
.max(256)
.messages({
    'string.min': UserPersonalInfoValidationMessage.FIRSTNAME_MIN,
    'string.max': UserPersonalInfoValidationMessage.FIRSTNAME_MAX,
    'string.empty': UserPersonalInfoValidationMessage.FIRSTNAME_REQUIRED,
  }),
  lastName: Joi.string().trim().required().min(2)
.max(256)
.messages({
    'string.min': UserPersonalInfoValidationMessage.LASTNAME_MIN,
    'string.max': UserPersonalInfoValidationMessage.LASTNAME_MAX,
    'string.empty': UserPersonalInfoValidationMessage.LASTNAME_REQUIRED,
  }),
  email: Joi.string()
    .trim()
    .pattern(
      /([0-9a-z!#$%&'*+-/=?^_`{|}~.]{1,64})@([0-9a-z]+)\.([0-9a-z]{2,64})/,
    )
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.pattern.base': UserPersonalInfoValidationMessage.EMAIL_PATTERN,
      'string.email': UserPersonalInfoValidationMessage.EMAIL_REQUIRED,
      'string.empty': UserPersonalInfoValidationMessage.EMAIL_REQUIRED,
    }),
  phone: Joi.string()
    .trim()
    .pattern(/^\+\d{12,15}$/)
    .required()
    .messages({
      'string.pattern.base': UserPersonalInfoValidationMessage.PHONE_PATTERN,
      'string.empty': UserPersonalInfoValidationMessage.PHONE_REQUIRED,
    }),

  country: Joi.string().allow(''),
  region: Joi.string().allow(''),
  city: Joi.string().allow(''),
  zip: Joi.string().allow(''),
  novaPoshtaRef: Joi.string().allow(''),
  instagram: Joi.string().allow(''),
  linkedin: Joi.string().allow(''),
  facebook: Joi.string().allow(''),

  password: Joi.string().trim().messages({
    'string.empty': UserPersonalInfoValidationMessage.EMPTY_PASSWORD,
  }),
  newPassword: Joi.string()
    .allow('')
    .disallow(Joi.ref('password'))
    .pattern(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z~!@#$%^*\-_=+[{]}\/;:,.?]{8,16}$/,
    )
    .messages({
      'string.pattern.base': UserPersonalInfoValidationMessage.NEW_PASSWORD,
      'any.invalid': UserPersonalInfoValidationMessage.SAME_PASSWORD,
    }),
  repeatPassword: Joi.any().valid(Joi.ref('newPassword')).messages({
    'any.only': UserPersonalInfoValidationMessage.DIFFERENT_PASSWORDS,
  }),
});
