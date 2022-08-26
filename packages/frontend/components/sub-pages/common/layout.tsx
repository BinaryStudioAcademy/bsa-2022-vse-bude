import type { FC } from 'react';
import type { NestedLayoutProps } from '../user-account/personal-info/types';
import * as styles from './styles';

export const NestedLayout: FC<NestedLayoutProps> = ({ children }) => (
  <div css={styles.nestedLayout}>{children}</div>
);
