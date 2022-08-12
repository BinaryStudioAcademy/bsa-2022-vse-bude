import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconNameToSvgIcon } from 'common/enums/icons';
import type { IconProps } from './types';

export const Icon = ({ className, css, icon, color, size }: IconProps) => (
  <FontAwesomeIcon
    className={className}
    css={css}
    icon={IconNameToSvgIcon[icon]}
    color={color}
    size={size}
  />
);
