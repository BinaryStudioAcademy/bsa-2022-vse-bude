import type { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconNameToSvgIcon, IconName } from '@enums';
import { ColorPalette } from '@vse-bude/shared';
import { Anchor } from '@primitives';
import { ColumnHeader } from '../common/column-header';
import * as styles from './styles';
import type { ContactsProps } from './types';

export const Contacts: FC<ContactsProps> = ({ email, phone }) => {
  const { t } = useTranslation('footer');

  return (
    <div css={styles.footerLinksWrapper}>
      <ColumnHeader>{t('CONTACT')}</ColumnHeader>

      <div css={styles.footerLinksRow}>
        <FontAwesomeIcon
          css={styles.phone}
          color={ColorPalette.YELLOW_100}
          icon={IconNameToSvgIcon[IconName.PHONE]}
        />
        <Anchor
          variant="secondary"
          href={`tel:${phone}`}
          label={phone}
          target="_self"
        />
      </div>

      <div css={styles.footerLinksRow}>
        <FontAwesomeIcon
          css={styles.email}
          color={ColorPalette.YELLOW_100}
          icon={IconNameToSvgIcon[IconName.EMAIL]}
        />
        <Anchor
          variant="secondary"
          href={`mailto:${email}`}
          label={email}
          target="_self"
        />
      </div>
    </div>
  );
};
