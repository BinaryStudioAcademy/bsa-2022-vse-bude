import { ProductType } from '@vse-bude/shared';
import { useTranslation } from 'next-i18next';
import * as styles from './styles';

export const ItemType = ({ type }: { type: string }): JSX.Element => {
  const { t } = useTranslation();
  const typeText =
    type === ProductType.SELLING
      ? t('my-list:card.fixedPrice')
      : t('my-list:card.auction');

  return <span css={styles.itemStatus}>{typeText}</span>;
};
