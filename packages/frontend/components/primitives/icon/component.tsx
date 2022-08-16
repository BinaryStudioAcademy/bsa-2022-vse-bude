import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconColor, IconNameToSvgIcon } from '@enums';
import type { IconProps } from './types';
import * as styles from './styles';

export const Icon = ({ icon, color, size = 'md' }: IconProps) => (
  <FontAwesomeIcon
    css={styles.icon}
    data-size={size}
    icon={IconNameToSvgIcon[icon]}
    color={IconColor[color.toUpperCase()]}
  />
);
