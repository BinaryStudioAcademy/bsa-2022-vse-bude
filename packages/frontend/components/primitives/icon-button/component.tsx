import { Icon } from '@primitives';
import { IconColor } from '@enums';
import type { IconButtonProps } from './types';
import * as styles from './styles';

export const IconButton = ({
  icon,
  color = IconColor.YELLOW,
  backgroundColor = 'transparent',
  size = 'md',
  cssExtend,
  onClick,
  type = 'button',
  ariaLabel,
}: IconButtonProps) => (
  <button
    aria-label={ariaLabel}
    css={[styles.iconButton, cssExtend]}
    onClick={onClick}
    data-size={size}
    data-bg-color={backgroundColor}
    type={type}
  >
    <Icon icon={icon} color={color} />
  </button>
);
