import { FC } from 'react';
import * as styles from './styles';
import type { FooterPolicyProps } from './types';
import { InternalLink } from '@primitives';
import { ColumnHeader } from '../footer-common/column-header';

export const FooterPolicy: FC<FooterPolicyProps> = ({
  header,
  path,
  label,
}) => {
  return (
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
};
