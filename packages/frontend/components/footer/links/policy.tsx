import type { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconNameToSvgIcon, IconName } from '@enums';
import { ColorPalette } from '@vse-bude/shared';
import { InternalLink } from '@primitives';
import { ColumnHeader } from '../common/column-header';
import * as styles from './styles';
import type { PolicyProps } from './types';

export const Policy: FC<PolicyProps> = ({ path }) => {
  const { t } = useTranslation('common');

  return (
    <div css={styles.footerLinksWrapper}>
      <ColumnHeader>{t('footer.security')}</ColumnHeader>

      <div css={styles.footerLinksRow}>
        <FontAwesomeIcon
          css={styles.shield}
          color={ColorPalette.YELLOW_100}
          icon={IconNameToSvgIcon[IconName.PRIVACY_POLICY]}
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
