import type { IconNameToSvgIcon, IconName } from '../../common/enums';

export interface LinkData {
  iconPath: typeof IconNameToSvgIcon[IconName];
  label: string;
  path: string;
}

export interface LinkProps extends LinkData {
  location: boolean;
}
