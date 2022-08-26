import { ColorsAvatar } from '@enums';
import Image from 'next/image';
import { AccountRoutes, Routes } from '@enums';
import { Loader } from '../loader';
import * as styles from './styles';
import type { AvatarProps } from './types';

export const Avatar = ({
  firstName = '',
  lastName = '',
  image,
  loading = false,
  handleClick,
}: AvatarProps) => {
  const colors = Object.values(ColorsAvatar);
  const colorByName = colors[firstName.charCodeAt(0) % colors.length ?? 0];

  return (
    <button
      css={styles.wrapper}
      style={{ backgroundColor: image ? 'transparent' : colorByName }}
      onClick={handleClick}
      path-label={Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_PERSONAL}
    >
      {image ? (
        <Image
          css={styles.avatar}
          src={image}
          alt={'avatar image'}
          height={35}
          width={35}
        />
      ) : (
        <div css={styles.initials}>
          {loading ? (
            <Loader size="extraSmall" />
          ) : (
            !image && `${firstName[0]}${lastName[0]}`
          )}
        </div>
      )}
    </button>
  );
};
