import type { Interpolation } from '@emotion/styled';
import type { Theme } from '@emotion/react';

export interface ProfileInfoProps {
  image?: string;
  firstName?: string;
  lastName?: string;
}

export interface DropdownProfileProps {
  style?: Interpolation<Theme>;
}

export interface PopoverContentProps {
  wrapperStyles?: Interpolation<Theme>;
  innerStyles?: Interpolation<Theme>;
}
