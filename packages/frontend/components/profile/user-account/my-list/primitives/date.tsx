import * as styles from './styles';
import type { DateProps } from './types';

export const ItemDate = ({ time, size }: DateProps) => {
  const itemDate = new Date(time);
  const year = itemDate.getFullYear();
  const date = itemDate.getDate();
  const month = itemDate.getMonth();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <div data-siza={size} css={styles.dateWrapper}>
      <time css={styles.date} dateTime={time.toString()}>
        {`${date} ${months[month]} ${year}`}
      </time>
    </div>
  );
};
