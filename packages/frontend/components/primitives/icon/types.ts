import type { Interpolation, Theme } from '@emotion/react';
import type { IconColor, IconName } from '@enums';

export type IconProps = {
  icon: IconName;
  color: IconColor;
  cssExtend?: Interpolation<Theme>;
  size?: SizeProp;
};

export type SizeProp = 'lg' | 'md' | 'sm' | 'xs';
