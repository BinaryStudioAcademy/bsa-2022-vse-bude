import * as Joi from 'joi';
import { TFunction } from 'i18next';
import { ICreateAuction, PLACE } from '@vse-bude/shared';
import { SHORT_PHONE_NUMBER_REGEX } from '~/common/regexp/regexp';
import {
  MAX_COUNTRY_LENGTH,
  MAX_CITY_LENGTH,
  MAX_TITLE_POST_LENGTH,
  MAX_DESCRIPTION_POST_LENGTH,
  MIN_PRICE,
  MIN_BID,
} from '~/common/constants/constants';

const getProductsAuctionSchema = (
  t: TFunction,
): Joi.ObjectSchema<ICreateAuction> => {
  return Joi.object<ICreateAuction>({
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
    recommendedPriceCurrency: Joi.any().empty(''),
    recommendedPrice: Joi.number()
      .min(MIN_PRICE)
      .messages({
        'number.base': t('errors.NUMBER_PRICE'),
        'number.min': t('errors.MIN_PRICE'),
      }),
    minimalBidCurrency: Joi.any().empty(''),
    minimalBid: Joi.number()
      .min(MIN_BID)
      .messages({
        'number.base': t('errors.NUMBER_BID'),
        'number.min': t('errors.MIN_BID'),
      }),
    endDate: Joi.date()
      .iso()
      .required()
      .messages({
        'date.format': t('errors.EMPTY_DATE'),
        'string.empty': t('errors.EMPTY_DATE'),
        'any.required': t('errors.EMPTY_DATE'),
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

export { getProductsAuctionSchema };
