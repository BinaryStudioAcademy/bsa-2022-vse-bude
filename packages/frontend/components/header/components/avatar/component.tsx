import Image from 'next/image';
import * as styles from './styles';
import type { AvatarProps } from './types';

export const Avatar = ({ firstName, lastName, image }: AvatarProps) => {
  const initials = `${firstName[0]}${lastName[0]}`;

  return (
    <div css={styles.wrapper}>
      {image ? (
        <Image
          css={styles.avatar}
          src={image}
          alt={'avatar image'}
          height={35}
          width={35}
        />
      ) : (
        <div css={styles.initials}>{initials}</div>
      )}
    </div>
  );
};
