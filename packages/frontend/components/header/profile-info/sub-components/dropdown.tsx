import { IconName, IconColorProps } from '@enums';
import { IconButton } from '@primitives';
import type { DropdownProfileProps } from '../types';

export const DownArrow = ({ style, isOpen, onClick }: DropdownProfileProps) =>
  isOpen ? (
    <IconButton
      icon={IconName.ANGLE_UP}
      color={IconColorProps.BLACK}
      cssExtend={style}
      onClick={onClick}
    />
  ) : (
    <IconButton
      icon={IconName.ANGLE_DOWN}
      color={IconColorProps.BLACK}
      cssExtend={style}
      onClick={onClick}
    />
  );
