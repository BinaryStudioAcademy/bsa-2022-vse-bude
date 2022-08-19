import type { Interpolation } from '@emotion/react';
import type { IconName } from '@enums';
import type { Theme } from 'theme';

export type IconButtonProps = {
  icon: typeof IconName[keyof typeof IconName];
  size?: SizeProp;
  color?: string;
  backgroundColor?: BackgroundColorProp;
  isBackgroundDisplayed?: boolean;
  cssExtend?: Interpolation<Theme>;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type BackgroundColorProp = 'lightgray' | 'darkgray' | 'transparent';

export type SizeProp = 'lg' | 'md' | 'sm' | 'xs';
