import type { FC } from 'react';
import { InternalLink } from '@primitives';
import { ColumnHeader } from '../footer-common/column-header';
import * as styles from './styles';
import type { FooterContactsProps } from './types';

export const FooterContacts: FC<FooterContactsProps> = ({
  header,
  email,
  phone,
}) => (
  <div css={styles.footerLinksWrapper}>
    <ColumnHeader>{header}</ColumnHeader>

    <div css={styles.footerLinksRow}>
      <span css={styles.phone}></span>
      <InternalLink variant="secondary" href={`tel:${phone}`} label={phone} />
    </div>

    <div css={styles.footerLinksRow}>
      <span css={styles.email}></span>
      <InternalLink
        variant="secondary"
        href={`mailto:${email}`}
        label={email}
      />
    </div>
  </div>
);
