import type { FC } from 'react';
import type { SectionHeaderProps } from './types';
import * as styles from './styles';

export const SectionHeader: FC<SectionHeaderProps> = ({ children }) => (
  <h4 css={styles.sectionHeader}>{children}</h4>
);
