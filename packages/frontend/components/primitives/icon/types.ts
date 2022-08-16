import type { IconName } from '@enums';

export type IconProps = {
  icon: typeof IconName[keyof typeof IconName];
  color: ColorProp;
  css?: string;
  size?: SizeProp;
};

export type SizeProp = 'lg' | 'md' | 'sm' | 'xs';

export type ColorProp =
  | 'yellow'
  | 'black'
  | 'white'
  | 'gray'
  | 'green'
  | 'disabled';
