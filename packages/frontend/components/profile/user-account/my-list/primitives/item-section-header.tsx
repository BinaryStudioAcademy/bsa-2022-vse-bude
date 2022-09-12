import * as styles from './styles';

export const ItemSectionHeader = ({
  itemHeader,
}: {
  itemHeader: string;
}): JSX.Element => <h4 css={styles.itemSectionHeader}>{itemHeader}</h4>;
