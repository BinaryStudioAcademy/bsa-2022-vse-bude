import type { FC } from 'react';
import type { ColumnHeaderProp } from './types';
import * as styles from './styles';

export const ColumnHeader: FC<ColumnHeaderProp> = ({ children }) => (
  <h5 css={styles.columnHeader}>{children}</h5>
);
