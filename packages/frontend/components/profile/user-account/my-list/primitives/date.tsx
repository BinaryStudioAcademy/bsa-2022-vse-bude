import * as styles from './styles';
import type { DateProps } from './types';

export const Date = ({ time, size }: DateProps) => (
  <div data-siza={size} css={styles.dateWrapper}>
    <time css={styles.date} dateTime={time}>
      {time}
    </time>
  </div>
);
