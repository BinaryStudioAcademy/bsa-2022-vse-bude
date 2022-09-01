import { IconName, IconColor } from '@enums';
import { IconButton } from '@primitives';
import type { DropdownProfileProps } from '../types';

export const DownArrow = ({ style, isOpen, onClick }: DropdownProfileProps) =>
  isOpen ? (
    <IconButton
      icon={IconName.ANGLE_UP}
      color={IconColor.BLACK}
      cssExtend={style}
      onClick={onClick}
    />
  ) : (
    <IconButton
      icon={IconName.ANGLE_DOWN}
      color={IconColor.BLACK}
      cssExtend={style}
      onClick={onClick}
    />
  );
