import { IconName, Routes, AccountRoutes } from '@enums';
import type { LinkData } from './types';

export const linksData: LinkData[] = [
  {
    iconPath: IconName.USER,
    label: 'personalInfo',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_PERSONAL,
  },
  {
    iconPath: IconName.LIST,
    label: 'myList',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_LIST,
  },
  {
    iconPath: IconName.SETTINGS,
    label: 'settings',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_SETTINGS,
  },
  {
    iconPath: IconName.MESSAGE,
    label: 'messages',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_MESSAGES,
  },
  {
    iconPath: IconName.SUPPORT,
    label: 'support',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_SUPPORT,
  },
  {
    iconPath: IconName.SIGN_OUT,
    label: 'signOut',
    path: Routes.DEFAULT,
  },
];
