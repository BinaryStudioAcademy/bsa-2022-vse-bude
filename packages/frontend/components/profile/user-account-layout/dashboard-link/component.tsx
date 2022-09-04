import type { FC } from 'react';
import { Flex, Icon } from '@primitives';
import { IconColor } from '@enums';
import { useRouter } from 'next/router';
import type { LinkProps } from '../types';
import * as styles from './styles';

export const DashboardLink: FC<LinkProps> = ({
  iconPath,
  label,
  location,
  path,
  onClick,
}) => {
  const router = useRouter();

  const handleClick = () => {
    onClick?.();
    router.push(path);
  };

  return (
    <button data-location={location} css={styles.link} onClick={handleClick}>
      <Flex css={styles.linkContent}>
        <Icon
          cssExtend={styles.icon}
          color={IconColor.YELLOW}
          icon={iconPath}
        />
        <div>
          <span css={styles.label}>{label}</span>
        </div>
      </Flex>
    </button>
  );
};
