import { IconName, Routes, AccountRoutes } from '@enums';
import type { LinkData } from './types';

export const linksData: LinkData[] = [
  {
    iconPath: IconName.USER,
    label: 'user-account:dashboard.personalInfo',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_PERSONAL,
  },
  {
    iconPath: IconName.LIST,
    label: 'user-account:dashboard.myList',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_LIST,
  },
  {
    iconPath: IconName.SETTINGS,
    label: 'user-account:dashboard.settings',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_SETTINGS,
  },
  {
    iconPath: IconName.MESSAGE,
    label: 'user-account:dashboard.messages',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_MESSAGES,
  },
  {
    iconPath: IconName.SUPPORT,
    label: 'user-account:dashboard.support',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_SUPPORT,
  },
  {
    iconPath: IconName.SIGN_OUT,
    label: 'user-account:dashboard.signOut',
    path: Routes.DEFAULT,
  },
];
