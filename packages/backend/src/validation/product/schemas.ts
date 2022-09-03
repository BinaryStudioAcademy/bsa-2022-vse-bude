import { ProductStatus } from '@prisma/client';
import { ProductType } from '@vse-bude/shared';
import Joi from 'joi';
import { lang } from '../../lang';

export const createPostSchema = Joi.object({
  category: Joi.any().allow(''),
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
  site: Joi.string().max(50).allow(''),
  instagram: Joi.string().max(50).allow(''),
  facebook: Joi.string().max(50).allow(''),
  city: Joi.string().max(50).allow(''),
  country: Joi.string()
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
    .required()
    .messages({
      'number.base': lang('product:validation.price.base'),
      'number.empty': lang('product:validation.price.empty'),
      'any.required': lang('product:validation.price.empty'),
    }),
});

export const updatePostSchema = Joi.object({
  images: Joi.array().items(Joi.string()),
  category: Joi.any().allow(''),
  type: Joi.string().valid(ProductType.AUCTION, ProductType.SELLING),
  status: Joi.string().valid(
    ProductStatus.CREATED,
    ProductStatus.ACTIVE,
    ProductStatus.DRAFT,
  ),
  callingCode: Joi.string().max(50).allow(''),
  currency: Joi.string().max(50).allow(''),
  site: Joi.string().max(50).allow(''),
  instagram: Joi.string().max(50).allow(''),
  facebook: Joi.string().max(50).allow(''),
  city: Joi.string().max(50).allow(''),
  country: Joi.string().max(50).allow(''),
  // country: Joi.string()
  //   .trim()
  //   .messages({
  //     'string.empty': t('product:validation.title.empty'),
  //   }),
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
    // .pattern(/\+380\d{9}/)
    .messages({
      'string.pattern.base': lang('product:validation.phone.pattern'),
    }),
  price: Joi.number().messages({
    'number.base': lang('product:validation.price.base'),
    'number.empty': lang('product:validation.price.empty'),
  }),
});
