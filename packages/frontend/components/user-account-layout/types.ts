import type React from 'react';
import type { IconName } from '../../common/enums';

export interface AccountPageProps {
  children: React.ReactNode;
}

export interface LinkData {
  iconPath: typeof IconName[keyof typeof IconName];
  label: string;
  path: string;
}

export interface LinkProps extends LinkData {
  location: boolean;
}
