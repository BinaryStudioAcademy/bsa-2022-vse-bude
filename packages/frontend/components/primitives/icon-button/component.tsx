import { Icon } from '@primitives';
import type { IconButtonProps } from './types';
import * as styles from './styles';

export const IconButton = ({
  icon,
  color,
  backgroundColor,
  size = 'md',
  className,
  isBackgroundTransparent = true,
  onClick,
}: IconButtonProps) => (
  <button
    css={styles.iconButton}
    className={className}
    onClick={onClick}
    data-size={size}
    data-bg-color={backgroundColor}
    data-bg-transparent={isBackgroundTransparent}
  >
    <Icon icon={icon} color={color} />
  </button>
);
