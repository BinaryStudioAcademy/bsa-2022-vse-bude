import Joi from 'joi';
import type { CreateBidRequest } from '@vse-bude/shared';
import type { TFunction } from 'next-i18next';

export const minBidValidation = (minBidAmount: number, t: TFunction) =>
  Joi.object<CreateBidRequest>({
    price: Joi.number()
      .min(minBidAmount)
      .required()
      .messages({
        'number.min': t('item:bid.validation.min'),
        'number.required': t('item:bid.validation.required'),
        'number.base': t('item:bid.validation.numeric'),
        'number.empty': t('item:bid.validation.required'),
        'number.unsafe': t('item:bid.validation.safe'),
      }),
  });
