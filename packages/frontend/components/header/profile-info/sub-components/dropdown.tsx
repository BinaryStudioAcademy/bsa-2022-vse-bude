import { IconName } from '@enums';
import { Icon } from '@primitives';
import type { DropdownProfileProps } from '../types';

export const DownArrow = ({ style }: DropdownProfileProps) => (
  <div css={style}>
    <Icon icon={IconName.ANGLE_DOWN} color="yellow" />
  </div>
);
