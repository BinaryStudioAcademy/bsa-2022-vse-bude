import type { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { IconName } from '@enums';
import { Icon, InternalLink } from '@primitives';
import { ColumnHeader } from '../common/column-header';
import * as styles from './styles';
import type { PolicyProps } from './types';

export const Policy: FC<PolicyProps> = ({ path }) => {
  const { t } = useTranslation('common');

  return (
    <div css={styles.footerLinksWrapper}>
      <ColumnHeader>{t('footer.security')}</ColumnHeader>

      <div css={styles.footerLinksRow}>
        <Icon
          cssExtend={styles.shield}
          color="yellow"
          icon={IconName.PRIVACY_POLICY}
        />
        <span css={styles.primaryUnderline}>
          <InternalLink
            variant="accent"
            label={t('footer.securityLink')}
            href={path}
          />
        </span>
      </div>
    </div>
  );
};
