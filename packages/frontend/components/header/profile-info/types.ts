import type { Interpolation } from '@emotion/styled';
import type { Theme } from '@emotion/react';

export interface DropdownProfileProps {
  style?: Interpolation<Theme>;
  isOpen: boolean;
  onClick?: () => void;
}

export interface PopoverContentProps {
  handleClose?: () => void;
}
