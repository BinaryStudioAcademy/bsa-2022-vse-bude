import type { Interpolation, Theme } from '@emotion/react';
import type { IconColor, IconName } from '@enums';

export type IconButtonProps = {
  icon: typeof IconName[keyof typeof IconName];
  ariaLabel: string;
  size?: SizeProp;
  color?: IconColor;
  backgroundColor?: BackgroundColorProp;
  isBackgroundDisplayed?: boolean;
  cssExtend?: Interpolation<Theme>;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export type BackgroundColorProp = 'lightgray' | 'darkgray' | 'transparent';

export type SizeProp = 'lg' | 'md' | 'sm' | 'xs';
