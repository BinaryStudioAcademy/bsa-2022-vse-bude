import { IconName, Routes, AccountRoutes } from '@enums';
import type { LinkData } from './types';

export const linksData: LinkData[] = [
  {
    iconPath: IconName.USER,
    label: 'PERSONAL_INFO',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_PERSONAL,
  },
  {
    iconPath: IconName.LIST,
    label: 'MY_LIST',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_LIST,
  },
  {
    iconPath: IconName.SETTINGS,
    label: 'SETTINGS',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_SETTINGS,
  },
  {
    iconPath: IconName.MESSAGE,
    label: 'MESSAGES',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_MESSAGES,
  },
  {
    iconPath: IconName.SUPPORT,
    label: 'SUPPORT',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_SUPPORT,
  },
  {
    iconPath: IconName.SIGN_OUT,
    label: 'SIGN_OUT',
    path: Routes.DEFAULT,
  },
];
