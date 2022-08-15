import type { FC } from 'react';
import { Anchor } from '@primitives';
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
      <Anchor
        variant="secondary"
        href={`tel:${phone}`}
        label={phone}
        target="_self"
      />
    </div>

    <div css={styles.footerLinksRow}>
      <span css={styles.email}></span>
      <Anchor
        variant="secondary"
        href={`mailto:${email}`}
        label={email}
        target="_self"
      />
    </div>
  </div>
);
