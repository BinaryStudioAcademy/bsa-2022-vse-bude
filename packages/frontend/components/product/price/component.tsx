import { useTranslation } from 'next-i18next';
import type { PriceProps } from './types';
import { price } from './styles';

export const Price = ({ amount }: PriceProps) => {
  const { t } = useTranslation();

  return <span css={price}>{t('public:uah', { value: amount })}</span>;
};
