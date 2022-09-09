import { useTranslation } from 'next-i18next';
import * as styles from './styles';

export const Price = ({ price }: { price: number }): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div css={styles.priceWrapper}>
      <h6 css={styles.price}>{price}</h6>
      <h6 css={styles.price}>{t('my-list:card.currency_uah')}</h6>
    </div>
  );
};
