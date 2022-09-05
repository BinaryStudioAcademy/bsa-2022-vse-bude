import type { OrderDto } from '@vse-bude/shared';
import crypto from 'crypto';
import { getEnv } from './env';

export const generateMerchantSignature = ({
  id,
  createdAt,
  cost,
  product,
}: OrderDto) => {
  const string =
    [
      getEnv('WAY_FOR_PAY_MERCHANT_ACCOUNT'),
      getEnv('APP_URL'),
      id,
      new Date(createdAt).getTime(),
      cost,
      product.title,
      product.price,
      1,
    ].join(';') + ';';

  const key = getEnv('WAY_FOR_PAY_MERCHANT_SECRET_KEY');

  const hash = crypto.createHmac('md5', key).update(string).digest('hex');

  return hash;
};
