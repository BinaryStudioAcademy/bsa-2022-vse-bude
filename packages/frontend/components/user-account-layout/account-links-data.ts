import { IconName, Routes, AccountRoutes } from '@enums';
import type { LinkData } from './types';

export const linksData: LinkData[] = [
  {
    iconPath: IconName.USER,
    label: 'account.personalInfo',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_PERSONAL,
  },
  {
    iconPath: IconName.LIST,
    label: 'account.myList',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_LIST,
  },
  {
    iconPath: IconName.SETTINGS,
    label: 'account.settings',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_SETTINGS,
  },
  {
    iconPath: IconName.MESSAGE,
    label: 'account.messages',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_MESSAGES,
  },
  {
    iconPath: IconName.SUPPORT,
    label: 'account.support',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_SUPPORT,
  },
  {
    iconPath: IconName.SIGN_OUT,
    label: 'account.signOut',
    path: Routes.DEFAULT,
  },
];
