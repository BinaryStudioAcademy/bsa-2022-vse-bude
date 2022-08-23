import type { IconName } from '@enums';

export type IconProps = {
  icon: typeof IconName[keyof typeof IconName];
  color: string;
  cssExtend?: any;
  size?: SizeProp;
};

export type SizeProp = 'lg' | 'md' | 'sm' | 'xs';
