import type React from 'react';
import type userAccount from 'public/locales/ua/user-account.json';
import type { IconNameToSvgIcon, IconName } from '../../common/enums';

export interface AccountPageProps {
  children: React.ReactNode;
}

export interface LinkData {
  iconPath: typeof IconNameToSvgIcon[IconName];
  label: keyof typeof userAccount.dashboard;
  path: string;
}

export interface LinkProps extends Omit<LinkData, 'label'> {
  location: boolean;
  label: string;
}
