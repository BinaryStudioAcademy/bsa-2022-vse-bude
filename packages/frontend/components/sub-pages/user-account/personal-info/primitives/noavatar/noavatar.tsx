import { FC } from 'react';
import { NoavatarProps } from './types';
import * as styles from './styles';

export const Noavatar: FC<NoavatarProps> = ({ firstName, lastName }) => {
  return (
    <div css={styles.lettersWrapper}>
      <span css={styles.letter}>{firstName.charAt(0).toUpperCase()}</span>
      <span css={styles.letter}>{lastName.charAt(0).toUpperCase()}</span>
    </div>
  );
};
