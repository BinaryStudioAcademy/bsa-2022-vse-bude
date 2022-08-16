import type { FC } from 'react';
import type { SectionHEader } from './types';
import * as styles from './styles';

export const Header: FC<SectionHEader> = ({ children }) => (
  <h4 css={styles.sectionHeader}>{children}</h4>
);
