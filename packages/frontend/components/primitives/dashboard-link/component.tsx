import type { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColorPalette } from '@vse-bude/shared';
import { InternalLink, Flex } from '@primitives';
import type { LinkProps } from '../../../pages/user-account/types';
import * as styles from './styles';

export const DashboardLink: FC<LinkProps> = ({
  iconPath,
  label,
  location,
  path,
}) => (
  <div data-location={location} css={styles.link}>
    <Flex css={styles.linkContent} align="center">
      <div css={styles.icon}>
        <FontAwesomeIcon
          css={styles.img}
          color={ColorPalette.YELLOW_100}
          icon={iconPath}
        />
      </div>
      <InternalLink href={path} label={label} variant="dashboard" />
    </Flex>
  </div>
);
