import { ColorsAvatar } from '@enums';
import Image from 'next/image';
import { Loader } from '../loader';
import * as styles from './styles';
import type { AvatarProps } from './types';

export const Avatar = ({
  firstName = '',
  lastName = '',
  image,
  loading = false,
}: AvatarProps) => {
  const colors = Object.values(ColorsAvatar);
  const colorByName = colors[firstName.charCodeAt(0) % colors.length ?? 0];

  return (
    <div css={styles.wrapper} style={{ backgroundColor: colorByName }}>
      {!!image && (
        <Image
          css={styles.avatar}
          src={image}
          alt={'avatar image'}
          height={35}
          width={35}
        />
      )}
      {loading ? <Loader /> : `${firstName[0]}${lastName[0]}`}
    </div>
  );
};
