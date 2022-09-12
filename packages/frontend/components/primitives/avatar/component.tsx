import Image from 'next/future/image';
import { ProfileRoutes, Routes, ColorsAvatar } from '@enums';
import { Loader } from '../loader';
import * as styles from './styles';
import type { AvatarProps } from './types';

export const Avatar = ({
  firstName = '',
  lastName = '',
  image,
  loading = false,
  isLarge = false,
  handleClick,
}: AvatarProps) => {
  const colors = Object.values(ColorsAvatar);
  const colorByName = colors[firstName.charCodeAt(0) % colors.length ?? 0];
  const size = isLarge ? 128 : 35;

  return (
    <button
      css={styles.wrapper}
      style={{
        backgroundColor: image ? 'transparent' : colorByName,
        width: size,
        height: size,
        cursor: handleClick ? 'pointer' : 'default',
      }}
      onClick={handleClick}
      path-label={Routes.PROFILE + ProfileRoutes.PERSONAL_INFO}
    >
      {image ? (
        <Image
          css={styles.avatar}
          style={{ width: size, height: size }}
          src={image}
          alt={'avatar image'}
          height={128}
          width={128}
        />
      ) : (
        <div css={styles.initials} style={{ fontSize: isLarge && '52px' }}>
          {loading ? (
            <Loader size={isLarge ? 'big' : 'extraSmall'} />
          ) : (
            !image && `${firstName[0]}${lastName[0]}`
          )}
        </div>
      )}
    </button>
  );
};
