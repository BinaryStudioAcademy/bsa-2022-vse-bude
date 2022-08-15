import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconColor } from 'common/enums/iconColor';
import { IconNameToSvgIcon } from 'common/enums/icons';
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
