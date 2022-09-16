import type React from 'react';
import * as styles from './styles';

export const Tooltip = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => <span css={styles.tooltip}>{children}</span>;
