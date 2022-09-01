import { IconName, IconColor } from '@enums';
import { Icon } from '@primitives';
import type { DropdownProfileProps } from '../types';

export const DownArrow = ({ style, isOpen }: DropdownProfileProps) =>
  isOpen ? (
    <Icon icon={IconName.ANGLE_UP} color={IconColor.BLACK} cssExtend={style} />
  ) : (
    <Icon
      icon={IconName.ANGLE_DOWN}
      color={IconColor.BLACK}
      cssExtend={style}
    />
  );
