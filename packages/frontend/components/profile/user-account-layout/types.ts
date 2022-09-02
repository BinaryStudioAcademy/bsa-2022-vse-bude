import type React from 'react';
import type { IconName } from '@enums';

export interface AccountPageProps {
  children: React.ReactNode;
}

export interface LinkData {
  iconPath: typeof IconName[keyof typeof IconName];
  label: any;
  path: string;
}

export interface LinkProps extends Omit<LinkData, 'label'> {
  location: boolean;
  label: string;
  onClick?: () => void;
}
