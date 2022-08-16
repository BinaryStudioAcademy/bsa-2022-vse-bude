import type { IconName } from '@enums';
import type { ColorProp } from '../icon/types';

export type IconButtonProps = {
  icon: typeof IconName[keyof typeof IconName];
  size?: SizeProp;
  color: ColorProp;
  backgroundColor: BackgroundColorProp;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type BackgroundColorProp = 'lightgray' | 'darkgray';

export type SizeProp = 'lg' | 'md' | 'sm' | 'xs';
