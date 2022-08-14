import type { PriceProps } from './types';
import { price } from './styles';

export const Price = ({ amount, currency = 'UAH' }: PriceProps) => (
  <span css={price}>
    <span>{amount} </span>
    <span>{currency}</span>
  </span>
);
