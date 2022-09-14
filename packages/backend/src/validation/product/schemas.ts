import { ProductStatus, Condition } from '@prisma/client';
import { ProductType } from '@vse-bude/shared';
import Joi from 'joi';
import { lang } from '../../lang';

export const createPostSchema = Joi.object({
  category: Joi.string().allow(''),
  condition: Joi.string()
    .required()
    .valid(Condition.NEW, Condition.USED)
    .messages({
      'string.empty': lang('product:validation.condition.empty'),
      'any.required': lang('product:validation.condition.empty'),
    }),
  type: Joi.string()
    .valid(ProductType.AUCTION, ProductType.SELLING)
    .required()
    .messages({
      'string.empty': lang('product:validation.type.empty'),
      'any.required': lang('product:validation.type.empty'),
    }),
  status: Joi.string()
    .valid(ProductStatus.CREATED, ProductStatus.ACTIVE, ProductStatus.DRAFT)
    .required()
    .messages({
      'string.empty': lang('product:validation.status.empty'),
      'any.required': lang('product:validation.status.empty'),
    }),
  callingCode: Joi.string().max(50).allow(''),
  currency: Joi.string().max(50).allow(''),
  recommendedPriceCurrency: Joi.any().allow(''),
  minimalBidCurrency: Joi.any().allow(''),
  site: Joi.string().max(50).allow(''),
  instagram: Joi.string().max(50).allow(''),
  facebook: Joi.string().max(50).allow(''),
  city: Joi.string().max(50).allow(''),
  endDate: Joi.date(),
  country: Joi.string()
    .max(50)
    .trim()
    .required()
    .messages({
      'string.empty': lang('product:validation.title.empty'),
      'any.required': lang('product:validation.title.empty'),
    }),
  title: Joi.string()
    .trim()
    .required()
    .max(50)
    .messages({
      'string.max': lang('product:validation.title.long'),
      'string.empty': lang('product:validation.title.empty'),
      'any.required': lang('product:validation.title.empty'),
    }),

  description: Joi.string()
    .trim()
    .required()
    .max(6000)
    .messages({
      'string.max': lang('product:validation.description.long'),
      'string.empty': lang('product:validation.description.empty'),
      'any.required': lang('product:validation.description.empty'),
    }),

  phone: Joi.string()
    .trim()
    .allow('')
    .pattern(/\+380\d{9}/)
    .messages({
      'string.pattern.base': lang('product:validation.phone.pattern'),
    }),
  price: Joi.number()
    .min(1)

    .messages({
      'number.base': lang('product:validation.price.base'),
      'number.empty': lang('product:validation.price.empty'),
      'any.required': lang('product:validation.price.empty'),
    }),
  recommendedPrice: Joi.number()
    .min(1)

    .messages({
      'number.base': lang('create-post:validation.price.base'),
      'number.empty': lang('create-post:validation.price.empty'),
    }),
  minimalBid: Joi.number()
    .min(1)

    .messages({
      'number.base': lang('create-post:validation.price.base'),
      'number.empty': lang('create-post:validation.price.empty'),
    }),
});

export const updatePostSchema = Joi.object({
  images: Joi.array().items(Joi.string()),
  category: Joi.string().allow(''),
  condition: Joi.string().valid(Condition.NEW, Condition.USED),
  type: Joi.string().valid(ProductType.AUCTION, ProductType.SELLING),
  status: Joi.string().valid(
    ProductStatus.CREATED,
    ProductStatus.ACTIVE,
    ProductStatus.DRAFT,
  ),
  endDate: Joi.date(),
  callingCode: Joi.string().max(50).allow(''),
  currency: Joi.string().max(50).allow(''),
  recommendedPriceCurrency: Joi.any().allow(''),
  minimalBidCurrency: Joi.any().allow(''),
  site: Joi.string().max(50).allow(''),
  instagram: Joi.string().max(50).allow(''),
  facebook: Joi.string().max(50).allow(''),
  city: Joi.string().max(50).allow(''),
  country: Joi.string()
    .max(50)
    .trim()
    .messages({
      'string.empty': lang('product:validation.title.empty'),
      'any.required': lang('product:validation.title.empty'),
    }),
  title: Joi.string()
    .trim()
    .max(50)
    .messages({
      'string.max': lang('product:validation.title.long'),
      'string.empty': lang('product:validation.title.empty'),
    }),

  description: Joi.string()
    .trim()
    .max(6000)
    .messages({
      'string.max': lang('product:validation.description.long'),
      'string.empty': lang('product:validation.description.empty'),
    }),

  phone: Joi.string()
    .trim()
    .allow('')
    .pattern(/\+380\d{9}/)
    .messages({
      'string.pattern.base': lang('product:validation.phone.pattern'),
    }),
  price: Joi.number().messages({
    'number.base': lang('product:validation.price.base'),
    'number.empty': lang('product:validation.price.empty'),
  }),
  recommendedPrice: Joi.number()
    .min(1)
    .messages({
      'number.base': lang('create-post:validation.price.base'),
      'number.empty': lang('create-post:validation.price.empty'),
    }),
  minimalBid: Joi.number()
    .min(1)
    .messages({
      'number.base': lang('create-post:validation.price.base'),
      'number.empty': lang('create-post:validation.price.empty'),
    }),
});
