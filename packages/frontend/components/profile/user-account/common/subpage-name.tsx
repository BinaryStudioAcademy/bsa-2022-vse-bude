import * as styles from './styles';

export const SubPageName = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => <h4 css={styles.sectionHeader}>{children}</h4>;
