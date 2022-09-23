import type { Interpolation } from '@emotion/styled';
import type { Theme } from '@emotion/react';
import type { UserDto } from '@vse-bude/shared';

export interface DropdownProfileProps {
  style?: Interpolation<Theme>;
  isOpen: boolean;
  onClick?: () => void;
}

export interface PopoverContentProps {
  handleClose?: () => void;
  user: UserDto;
}
