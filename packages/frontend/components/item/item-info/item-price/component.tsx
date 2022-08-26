import type { Interpolation } from '@emotion/react';
import type { Theme } from '@emotion/react';
import * as styles from './styles';

interface ItemPriceProps {
  amount: number;
  currency: string;
  cssExtended?: Interpolation<Theme>;
}

export const ItemPrice = ({
  amount,
  currency,
  cssExtended,
}: ItemPriceProps) => (
  <div css={[styles.priceWrapper, cssExtended]}>
    <span>{currency}</span>
    <span>{amount}</span>
  </div>
);
