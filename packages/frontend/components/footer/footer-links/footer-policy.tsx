import type { FC } from 'react';
import { InternalLink } from '@primitives';
import { ColumnHeader } from '../footer-common/column-header';
import * as styles from './styles';
import type { FooterPolicyProps } from './types';

export const FooterPolicy: FC<FooterPolicyProps> = ({
  header,
  path,
  label,
}) => (
  <div css={styles.footerLinksWrapper}>
    <ColumnHeader>{header}</ColumnHeader>

    <div css={styles.footerLinksRow}>
      <span css={styles.shield}></span>
      <span css={styles.primaryUnderline}>
        <InternalLink variant="accent" label={label} href={path} />
      </span>
    </div>
  </div>
);
