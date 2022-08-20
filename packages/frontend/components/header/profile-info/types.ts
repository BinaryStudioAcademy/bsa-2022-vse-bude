import type { Interpolation } from '@emotion/styled';
import type { Theme } from 'theme';

export interface DropdownProfileProps {
  style?: Interpolation<Theme>;
}

export interface PopoverContentProps {
  wrapperStyles?: Interpolation<Theme>;
  innerStyles?: Interpolation<Theme>;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}
