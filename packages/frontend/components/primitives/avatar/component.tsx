import { ColorsAvatar } from '@enums';
import Image from 'next/image';
import * as styles from './styles';
import type { AvatarProps } from './types';

export const Avatar = ({ firstName, lastName, image }: AvatarProps) => {
  const colors = Object.values(ColorsAvatar);
  const colorByName = colors[firstName.charCodeAt(0) % colors.length];

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
        <div
          css={styles.initials}
          style={{ backgroundColor: colorByName }}
        >{`${firstName[0]}${lastName[0]}`}</div>
      )}
    </div>
  );
};
