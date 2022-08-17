import type { FC } from 'react';
import { InternalLink, Flex, Icon } from '@primitives';
import type { IconName } from '@fortawesome/fontawesome-svg-core';
import type { LinkProps } from '../../user-account-layout/types';
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
        <Icon
          cssExtend={styles.img}
          color="yellow"
          icon={iconPath as IconName}
        />
      </div>
      <InternalLink href={path} label={label} variant="dashboard" />
    </Flex>
  </div>
);
