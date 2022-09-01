import { IconColor, IconNameToClassName } from '@enums';
import type { IconProps } from './types';
import * as styles from './styles';

export const Icon = ({ icon, cssExtend, color, size = 'md' }: IconProps) => (
  <i
    className={IconNameToClassName[icon]}
    style={{
      color: IconColor[color],
    }}
    data-size={size}
    css={[styles.icon, cssExtend]}
  ></i>
);
