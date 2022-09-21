import type { Interpolation } from '@emotion/react';
import type { Theme } from '@emotion/react';
import { useTranslation } from 'next-i18next';
import * as styles from './styles';

interface ItemPriceProps {
  amount: number;
  cssExtended?: Interpolation<Theme>;
}

export const ItemPrice = ({ amount, cssExtended }: ItemPriceProps) => {
  const { t } = useTranslation();

  return (
    <div css={[styles.priceWrapper, cssExtended]}>
      {t('public:uah', { value: amount })}
    </div>
  );
};
