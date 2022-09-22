import { ValidationRanges } from '@vse-bude/shared';
import { MILISECONDS_IN_ONE_DAY } from '@components/primitives/input/date-input';
import Joi from 'joi';
import type { TFunction } from 'next-i18next';

export const createAuctionSchema = (t: TFunction) =>
  Joi.object({
    category: Joi.string()
      .required()
      .messages({
        'string.empty': t('create-post:validation.category.empty'),
      }),
    condition: Joi.string()
      .required()
      .messages({
        'string.empty': t('create-post:validation.condition.empty'),
      }),
    currency: Joi.any().allow(''),
    recommendedPriceCurrency: Joi.any().allow(''),
    minimalBidCurrency: Joi.any().allow(''),
    callingCode: Joi.any().allow(''),
    site: Joi.string()
      .allow('')
      .uri()
      .max(ValidationRanges.MAX_SOCIAL_NETWORK_URI_SYMBOLS)
      .messages({
        'string.uri': 'create-post:validation.link.uri',
        'string.max': 'create-post:validation.link.max',
      }),
    instagram: Joi.string()
      .allow('')
      .uri()
      .max(ValidationRanges.MAX_SOCIAL_NETWORK_URI_SYMBOLS)
      .messages({
        'string.uri': 'create-post:validation.link.uri',
        'string.max': 'create-post:validation.link.max',
      }),
    facebook: Joi.string()
      .allow('')
      .uri()
      .max(ValidationRanges.MAX_SOCIAL_NETWORK_URI_SYMBOLS)
      .messages({
        'string.uri': 'create-post:validation.link.uri',
        'string.max': 'create-post:validation.link.max',
      }),
    city: Joi.string().allow(''),
    country: Joi.string()
      .trim()
      .required()
      .messages({
        'string.empty': t('create-post:validation.country.empty'),
      }),
    title: Joi.string()
      .trim()
      .required()
      .max(ValidationRanges.MAX_TITLE_SYMBOLS)
      .messages({
        'string.max': t('create-post:validation.title.long'),
        'string.empty': t('create-post:validation.title.empty'),
      }),

    description: Joi.string()
      .trim()
      .required()
      .max(ValidationRanges.MAX_DESCRIPTION_SYMBOLS)
      .messages({
        'string.max': t('create-post:validation.description.long'),
        'string.empty': t('create-post:validation.description.empty'),
      }),

    phone: Joi.string()
      .trim()
      .allow('')
      .pattern(/^\d{9}$/)
      .messages({
        'string.pattern.base': t('create-post:validation.phone.pattern'),
      }),
    recommendedPrice: Joi.number()
      .min(1)
      .required()
      .messages({
        'number.base': t('create-post:validation.price.base'),
        'number.required': t('create-post:validation.price.empty'),
      }),
    minimalBid: Joi.number()
      .min(1)
      .required()
      .messages({
        'number.base': t('create-post:validation.price.base'),
        'number.empty': t('create-post:validation.price.empty'),
      }),
    endDate: Joi.date()
      .min(Date.now() + MILISECONDS_IN_ONE_DAY)
      .required()
      .messages({
        'date.min': t('create-post:validation.date.base'),
      }),
  });
