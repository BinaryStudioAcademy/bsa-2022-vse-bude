import type { Interpolation } from '@emotion/react';
import type { IconName } from '@enums';
import type { Theme } from '@emotion/react';
import type { ColorProp } from '../icon/types';

export type IconButtonProps = {
  icon: typeof IconName[keyof typeof IconName];
  size?: SizeProp;
  color?: ColorProp;
  backgroundColor?: BackgroundColorProp;
  isBackgroundDisplayed?: boolean;
  cssExtend?: Interpolation<Theme>;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type BackgroundColorProp = 'lightgray' | 'darkgray' | 'transparent';

export type SizeProp = 'lg' | 'md' | 'sm' | 'xs';
