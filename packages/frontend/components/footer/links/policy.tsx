import type { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { IconName } from '@enums';
import { Icon, InternalLink } from '@primitives';
import { IconColor } from '@enums';
import { ColumnHeader } from '../common/column-header';
import * as styles from './styles';
import type { PolicyProps } from './types';

export const Policy: FC<PolicyProps> = ({ path }) => {
  const { t } = useTranslation();

  return (
    <div css={styles.footerLinksWrapper}>
      <ColumnHeader>{t('common:footer.security')}</ColumnHeader>

      <div css={styles.footerLinksRow}>
        <Icon
          cssExtend={styles.shield}
          color={IconColor.YELLOW}
          icon={IconName.PRIVACY_POLICY}
        />
        <span css={styles.primaryUnderline}>
          <InternalLink
            variant="accent"
            label={t('common:footer.securityLink')}
            href={path}
          />
        </span>
      </div>
    </div>
  );
};
