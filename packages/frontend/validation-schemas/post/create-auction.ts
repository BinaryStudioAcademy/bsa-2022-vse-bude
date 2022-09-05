import { MIN_DATE } from '@components/primitives/input/date-input';
import Joi from 'joi';
import type { TFunction } from 'next-i18next';

export const createAuctionSchema = (t: TFunction) =>
  Joi.object({
    category: Joi.string()
      .required()
      .messages({
        'string.empty': t('create-post:validation.category.empty'),
      }),
    currency: Joi.any().allow(''),
    recommendedPriceCurrency: Joi.any().allow(''),
    minimalBidCurrency: Joi.any().allow(''),
    callingCode: Joi.any().allow(''),
    site: Joi.any().allow(''),
    instagram: Joi.any().allow(''),
    facebook: Joi.any().allow(''),
    city: Joi.any().allow(''),
    country: Joi.string()
      .trim()
      .required()
      .messages({
        'string.empty': t('create-post:validation.title.empty'),
      }),
    title: Joi.string()
      .trim()
      .required()
      .max(50)
      .messages({
        'string.max': t('create-post:validation.title.long'),
        'string.empty': t('create-post:validation.title.empty'),
      }),

    description: Joi.string()
      .trim()
      .required()
      .max(6000)
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
        'number.empty': t('create-post:validation.price.empty'),
      }),
    minimalBid: Joi.number()
      .min(1)
      .required()
      .messages({
        'number.base': t('create-post:validation.price.base'),
        'number.empty': t('create-post:validation.price.empty'),
      }),
    endDate: Joi.date()
      .min(MIN_DATE)
      .required()
      .messages({
        'date.base': t('create-post:validation.date.base'),
      }),
  });
