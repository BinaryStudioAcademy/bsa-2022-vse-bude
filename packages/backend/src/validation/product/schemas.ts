import { ProductStatus } from '@prisma/client';
import { ProductType } from '@vse-bude/shared';
import Joi from 'joi';

export const createPostSchema = (t) =>
  Joi.object({
    category: Joi.any().allow(''),
    type: Joi.string()
      .valid(ProductType.AUCTION, ProductType.SELLING)
      .required()
      .messages({
        'string.empty': t('product:validation.type.empty'),
        'any.required': t('product:validation.type.empty'),
      }),
    status: Joi.string()
      .valid(ProductStatus.CREATED, ProductStatus.ACTIVE, ProductStatus.DRAFT)
      .required()
      .messages({
        'string.empty': t('product:validation.status.empty'),
        'any.required': t('product:validation.status.empty'),
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
        'string.empty': t('product:validation.title.empty'),
        'any.required': t('product:validation.title.empty'),
      }),
    title: Joi.string()
      .trim()
      .required()
      .max(50)
      .messages({
        'string.max': t('product:validation.title.long'),
        'string.empty': t('product:validation.title.empty'),
        'any.required': t('product:validation.title.empty'),
      }),

    description: Joi.string()
      .trim()
      .required()
      .max(6000)
      .messages({
        'string.max': t('product:validation.description.long'),
        'string.empty': t('product:validation.description.empty'),
        'any.required': t('product:validation.description.empty'),
      }),

    phone: Joi.string()
      .trim()
      .allow('')
      .pattern(/\+380\d{9}/)
      .messages({
        'string.pattern.base': t('product:validation.phone.pattern'),
      }),
    price: Joi.number()
      .required()
      .messages({
        'number.base': t('product:validation.price.base'),
        'number.empty': t('product:validation.price.empty'),
        'any.required': t('product:validation.price.empty'),
      }),
  });

export const updatePostSchema = (t) =>
  Joi.object({
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
        'string.max': t('product:validation.title.long'),
        'string.empty': t('product:validation.title.empty'),
      }),

    description: Joi.string()
      .trim()
      .max(6000)
      .messages({
        'string.max': t('product:validation.description.long'),
        'string.empty': t('product:validation.description.empty'),
      }),

    phone: Joi.string()
      .trim()
      .allow('')
      // .pattern(/\+380\d{9}/)
      .messages({
        'string.pattern.base': t('product:validation.phone.pattern'),
      }),
    price: Joi.number().messages({
      'number.base': t('product:validation.price.base'),
      'number.empty': t('product:validation.price.empty'),
    }),
  });
