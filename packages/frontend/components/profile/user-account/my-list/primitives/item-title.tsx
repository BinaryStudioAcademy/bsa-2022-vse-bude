import * as styles from './styles';

export const ItemHeader = ({ title }: { title: string }): JSX.Element => (
  <h6 css={styles.itemTitle}>{title}</h6>
);
