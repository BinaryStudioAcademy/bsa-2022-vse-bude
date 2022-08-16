import { Icon } from '@primitives';
import type { IconButtonProps } from './types';
import * as styles from './styles';

export const IconButton = ({
  icon,
  color,
  size = 'md',
  label,
  onClick,
}: IconButtonProps) => (
  <button
    css={styles.iconButton}
    onClick={onClick}
    data-variant={label && 'label'}
  >
    <Icon icon={icon} color={color} size={size} />
  </button>
);
