import * as Joi from 'joi';
import i18next from 'i18next';

const makeBid = (minimalBid: number) =>
  Joi.object({
    bid: Joi.number()
      .min(Number(minimalBid))
      .messages({
        'number.min': i18next.t('common:errors.LOW_BID'),
        'number.base': i18next.t('common:errors.INVALID_BID'),
      }),
  });

export { makeBid };
