import type { IconName } from '@enums';
import type { IconColor } from '@enums';

export type IconProps = {
  icon: typeof IconName[keyof typeof IconName];
  color: IconColor;
  cssExtend?: any;
  size?: SizeProp;
};

export type SizeProp = 'lg' | 'md' | 'sm' | 'xs';
