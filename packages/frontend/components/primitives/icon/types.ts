import type { IconName } from '@fortawesome/fontawesome-svg-core';

export type IconProps = {
  icon: IconName;
  css?: string;
  size?: SizeProp;
  color?: ColorProp;
};

type SizeProp = 'lg' | 'md' | 'sm' | 'xs';

type ColorProp = 'yellow' | 'black' | 'white' | 'gray' | 'green' | 'disabled';
