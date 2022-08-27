import type { FC } from 'react';
import { InternalLink, Flex, IconButton } from '@primitives';
import { IconColorProps } from '@enums';
import { useRouter } from 'next/router';
import type { LinkProps } from '../types';
import * as styles from './styles';

export const DashboardLink: FC<LinkProps> = ({
  iconPath,
  label,
  location,
  path,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };

  return (
    <div data-location={location} css={styles.link}>
      <Flex css={styles.linkContent} align="center">
        <div css={styles.icon}>
          <IconButton
            size="md"
            color={IconColorProps.YELLOW}
            icon={iconPath}
            onClick={handleClick}
          />
        </div>
        <InternalLink href={path} label={label} variant="dashboard" />
      </Flex>
    </div>
  );
};
