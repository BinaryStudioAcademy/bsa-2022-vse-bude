import { IconColor, IconNameToClassName } from '@enums';
import type { IconProps } from './types';
import * as styles from './styles';

export const Icon = ({
  icon,
  cssExtend,
  color = IconColor.GRAY,
  size = 'md',
}: IconProps) => (
  <i
    className={IconNameToClassName[icon]}
    style={{
      color: `${color}`,
    }}
    data-size={size}
    css={[styles.icon, cssExtend]}
  />
);
