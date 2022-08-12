import Image from 'next/image';
import * as styles from './styles';
import type { AvatarProps } from './types';

export const Avatar = ({
  firstName,
  lastName,
  image,
  ...props
}: AvatarProps) => (
  <div css={styles.wrapper} {...props}>
    <Image
      css={styles.avatar}
      src={image}
      alt={`${firstName} ${lastName}`}
      height={35}
      width={35}
    />
    <span css={styles.name}>{`${firstName} ${lastName}`}</span>
  </div>
);
