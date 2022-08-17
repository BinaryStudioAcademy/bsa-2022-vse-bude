import { IconName } from '@enums';
import { Icon } from '@primitives';
import type { DropdownInHeaderProps } from '../types';

export const DownArrow = ({ style }: DropdownInHeaderProps) => (
  <div css={style}>
    <Icon icon={IconName.ANGLE_DOWN} color="yellow" />
  </div>
);
