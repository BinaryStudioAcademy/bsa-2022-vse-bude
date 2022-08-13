import { FC } from 'react';
import * as styles from './styles';
import type { FooterContactsProps } from './types';
import { InternalLink } from '@primitives';
import { ColumnHeader } from '../footer-common/column-header';

export const FooterContacts: FC<FooterContactsProps> = ({ header ,email, phone }) => {
  return (
    <div css={styles.footerLinksWrapper}>
      <ColumnHeader>{header}</ColumnHeader>

      <div css={styles.footerLinksRow}>
        <span css={styles.phone}></span>
        <InternalLink
          variant="secondary"
          href={`tel:${phone}`}
          label={phone}
        />
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
};
