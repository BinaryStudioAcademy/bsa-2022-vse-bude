import type { IconName } from '@fortawesome/fontawesome-svg-core';
import type { ColorProp, SizeProp } from '../icon/types';

export type IconButtonProps = {
  icon: IconName;
  css?: string;
  size?: SizeProp;
  color?: ColorProp;
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
