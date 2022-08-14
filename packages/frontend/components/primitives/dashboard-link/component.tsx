import type { FC } from 'react';
import { InternalLink, Flex } from '@primitives';
import Image from 'next/image';
import type { LinkProps } from '../../../pages/user-account/types';
import * as styles from './styles';

export const DashboardLink: FC<LinkProps> = ({
  height,
  iconPath,
  label,
  location,
  path,
  width,
}) => (
  <div data-location={location} css={styles.link}>
    <Flex css={styles.linkContent} align="center">
      <div css={styles.icon}>
        <Image
          src={iconPath}
          width={width}
          height={height}
          layout="fixed"
          alt={label}
        />
      </div>
      <InternalLink href={path} label={label} variant="dashboard" />
    </Flex>
  </div>
);
