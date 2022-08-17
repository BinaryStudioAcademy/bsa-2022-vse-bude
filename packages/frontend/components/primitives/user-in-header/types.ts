import type { Interpolation } from '@emotion/styled';
import type { Theme } from 'theme';

export interface UserInHeaderProps {
  image?: string;
  firstName?: string;
  lastName?: string;
}

export interface DropdownInHeaderProps {
  style?: Interpolation<Theme>;
}

export interface AvatarInHeaderProps {
  url?: string;
  style?: Interpolation<Theme>;
}
