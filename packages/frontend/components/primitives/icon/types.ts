import type { IconName } from '@fortawesome/fontawesome-svg-core';

export type IconProps = {
  icon: IconName;
  cssExtend?: any;
  size?: SizeProp;
  color?: ColorProp;
};

type SizeProp = 'lg' | 'md' | 'sm' | 'xs';

type ColorProp = 'yellow' | 'black' | 'white' | 'gray' | 'green' | 'disabled';
