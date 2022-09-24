import * as Joi from 'joi';
import { TFunction } from 'i18next';

const getBidValidationSchema = (minimalBid: number, t: TFunction) =>
  Joi.object({
    bid: Joi.number()
      .min(minimalBid)
      .messages({
        'number.min': t('common:errors.LOW_BID'),
        'number.base': t('common:errors.INVALID_BID'),
      }),
  });

export { getBidValidationSchema };
