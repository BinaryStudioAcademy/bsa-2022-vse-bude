import type { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { IconName } from '@enums';
import { Anchor, Icon } from '@primitives';
import { ColumnHeader } from '../common/column-header';
import * as styles from './styles';
import type { ContactsProps } from './types';
import { IconColorProps } from '@enums';

export const Contacts: FC<ContactsProps> = ({ email, phone }) => {
  const { t } = useTranslation();

  return (
    <div css={styles.footerLinksWrapper}>
      <ColumnHeader>{t('common:footer.contacts')}</ColumnHeader>

      <div css={styles.footerLinksRow}>
        <Icon cssExtend={styles.phone} color={IconColorProps.YELLOW} icon={IconName.PHONE} />
        <Anchor
          variant="secondary"
          href={`tel:${phone}`}
          label={phone}
          target="_self"
        />
      </div>

      <div css={styles.footerLinksRow}>
        <Icon cssExtend={styles.email} color={IconColorProps.YELLOW} icon={IconName.EMAIL} />
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
