import type { FC } from 'react';
import type { AvatarProps } from './types';
import * as styles from './styles';

export const Avatar: FC<AvatarProps> = ({ src, alt }) => (
  <img css={styles.avatar} src={src} alt={alt} />
);
