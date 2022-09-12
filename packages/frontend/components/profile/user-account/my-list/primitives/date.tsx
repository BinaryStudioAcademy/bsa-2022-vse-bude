import { useTranslation } from 'next-i18next';
import * as styles from './styles';
import type { DateProps } from './types';

export const ItemDate = ({ time, size }: DateProps) => {
  const { t } = useTranslation();
  const itemDate = new Date(time);
  const year = itemDate.getFullYear();
  const date = itemDate.getDate();
  const month = itemDate.getMonth();
  const months = [
    t('my-list:months.january'),
    t('my-list:months.february'),
    t('my-list:months.march'),
    t('my-list:months.april'),
    t('my-list:months.may'),
    t('my-list:months.june'),
    t('my-list:months.july'),
    t('my-list:months.august'),
    t('my-list:months.september'),
    t('my-list:months.october'),
    t('my-list:months.november'),
    t('my-list:months.december'),
  ];

  return (
    <div data-siza={size} css={styles.dateWrapper}>
      <time css={styles.date} dateTime={time as string}>
        {`${date} ${months[month]} ${year}`}
      </time>
    </div>
  );
};
