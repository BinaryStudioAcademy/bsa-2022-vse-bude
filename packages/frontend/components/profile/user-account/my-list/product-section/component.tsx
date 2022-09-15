import { SectionHeader } from '../../common';
import type { ProductSectionProps } from './types';

import * as styles from './styles';

export const ProductSection = ({
  headerText,
  items,
  Card,
}: ProductSectionProps) => (
  <div css={styles.section}>
    <div css={styles.header}>
      <SectionHeader>{headerText}</SectionHeader>
    </div>
    <div css={styles.container}>
      {items ? items.map((item) => <Card key={item.id} data={item} />) : null}
    </div>
  </div>
);
