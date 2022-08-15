import type { IconName } from '@fortawesome/fontawesome-svg-core';

export type IconProps = {
  icon: IconName;
  css?: string;
  size?: SizeProp;
  color?: ColorProp;
};

export type SizeProp = 'lg' | 'md' | 'sm' | 'xs';

export type ColorProp =
  | 'yellow'
  | 'black'
  | 'white'
  | 'gray'
  | 'green'
  | 'disabled';
