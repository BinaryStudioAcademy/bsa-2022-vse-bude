import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { ProductStatuses } from '@vse-bude/shared';
import * as styles from './styles';

export const ItemStatus = ({
  status,
  isAuthor,
}: {
  status: string;
  isAuthor?: boolean;
}): JSX.Element => {
  const [itemStatus, setItemStatus] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    if (status === ProductStatuses.DRAFT) {
      setItemStatus(t('my-list:card.drafted'));
    }
    if (status === ProductStatuses.ACTIVE) {
      setItemStatus(t('my-list:card.posted'));
    }
    if (status === ProductStatuses.FINISHED && isAuthor) {
      setItemStatus(t('my-list:card.sold'));
    }
    if (status === ProductStatuses.FINISHED && !isAuthor) {
      setItemStatus(t('my-list:card.purchased'));
    }
  }, [status, t, isAuthor]);

  return <span css={styles.itemStatus}>{itemStatus}</span>;
};
