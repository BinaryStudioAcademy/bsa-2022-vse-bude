import { IconName, IconColor } from '@enums';
import { Icon } from '@primitives';
import type { DropdownProfileProps } from '../types';

export const DownArrow = ({ style, isOpen }: DropdownProfileProps) => (
  <Icon
    icon={isOpen ? IconName.ANGLE_UP : IconName.ANGLE_DOWN}
    color={IconColor.BLACK}
    cssExtend={style}
  />
);
