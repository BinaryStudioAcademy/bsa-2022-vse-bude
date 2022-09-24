import * as Joi from 'joi';
import { TFunction } from 'i18next';
import { IPostForms, PLACE } from '@vse-bude/shared';
import { SHORT_PHONE_NUMBER_REGEX } from '~/common/regexp/regexp';
import {
  MAX_COUNTRY_LENGTH,
  MAX_CITY_LENGTH,
  MAX_TITLE_POST_LENGTH,
  MAX_DESCRIPTION_POST_LENGTH,
  MIN_PRICE,
} from '~/common/constants/constants';

const getProductsPostSchema = (t: TFunction): Joi.ObjectSchema<IPostForms> => {
  return Joi.object<IPostForms>({
    category: Joi.string().empty(''),
    title: Joi.string()
      .trim()
      .required()
      .max(MAX_TITLE_POST_LENGTH)
      .messages({
        'string.max': t('errors.MAX_TITLE_POST_LENGTH'),
        'string.empty': t('errors.EMPTY_PRODUCT'),
      }),
    description: Joi.string()
      .trim()
      .required()
      .max(MAX_DESCRIPTION_POST_LENGTH)
      .messages({
        'string.max': t('errors.MAX_DESCRIPTION_POST_LENGTH'),
        'string.empty': t('errors.EMPTY_DESCRIPTION'),
      }),
    condition: Joi.string()
      .required()
      .messages({
        'string.empty': t('errors.EMPTY_CONDITION'),
      }),
    currency: Joi.any().empty(''),
    price: Joi.number()
      .min(MIN_PRICE)
      .messages({
        'number.base': t('errors.NUMBER_PRICE'),
        'number.min': t('errors.MIN_PRICE'),
      }),
    phone: Joi.string()
      .trim()
      .empty('')
      .pattern(SHORT_PHONE_NUMBER_REGEX)
      .messages({
        'string.pattern.base': t('errors.WRONG_FORMAT_PHONE'),
      }),
    country: Joi.string()
      .trim()
      .required()
      .max(MAX_COUNTRY_LENGTH)
      .pattern(PLACE)
      .messages({
        'string.empty': t('errors.EMPTY_COUNTRY'),
        'string.max': t('errors.MAX_COUNTRY_LENGTH'),
        'string.pattern.base': t('errors.PLACE_NAME'),
      }),
    city: Joi.string()
      .trim()
      .empty('')
      .max(MAX_CITY_LENGTH)
      .pattern(PLACE)
      .messages({
        'string.max': t('errors.MAX_CITY_LENGTH'),
        'string.pattern.base': t('errors.PLACE_NAME'),
      }),
  });
};

export { getProductsPostSchema };
