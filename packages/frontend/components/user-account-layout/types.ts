import type React from 'react';
import type { IconNameToSvgIcon, IconName } from '../../common/enums';

export interface AccountPageProps {
  children: React.ReactNode;
}

export interface LinkData {
  iconPath: typeof IconNameToSvgIcon[IconName];
  label: string;
  path: string;
}

export interface LinkProps extends LinkData {
  location: boolean;
}
