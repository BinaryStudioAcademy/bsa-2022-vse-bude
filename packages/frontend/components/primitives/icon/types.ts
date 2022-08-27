import type { Interpolation, Theme } from '@emotion/react';
import type { IconName } from '@enums';

export type IconProps = {
  icon: typeof IconName[keyof typeof IconName];
  color: string;
  cssExtend?: Interpolation<Theme>;
  size?: SizeProp;
};

export type SizeProp = 'lg' | 'md' | 'sm' | 'xs';
