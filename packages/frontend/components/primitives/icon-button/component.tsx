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
  onMouseEnter,
  onMouseLeave,
  type = 'button',
  ariaLabel,
  disabled = false,
}: IconButtonProps) => (
  <button
    aria-label={ariaLabel}
    css={[styles.iconButton, cssExtend]}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    data-size={size}
    data-bg-color={backgroundColor}
    type={type}
    disabled={disabled}
  >
    <Icon icon={icon} color={color} />
  </button>
);
