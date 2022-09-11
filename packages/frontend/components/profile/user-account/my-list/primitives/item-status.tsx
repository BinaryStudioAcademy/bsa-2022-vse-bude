import * as styles from './styles';

export const ItemStatus = ({ status }: { status: string }): JSX.Element => (
  <span css={styles.itemStatus}>{status}</span>
);
