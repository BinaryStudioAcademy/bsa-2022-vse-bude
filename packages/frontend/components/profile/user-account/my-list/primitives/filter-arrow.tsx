import { IconName, IconColor } from '@enums';
import { Icon } from '@primitives';
import type { FilterArrowProps } from './types';
import * as styles from './styles';

export const FilterArrow = ({ isOpen }: FilterArrowProps) => (
  <Icon
    icon={isOpen ? IconName.ANGLE_UP : IconName.ANGLE_DOWN}
    color={IconColor.GREEN}
    cssExtend={styles.arrow}
    size="xs"
  />
);
