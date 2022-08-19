import { IconName, IconNameToSvgIcon, Routes, AccountRoutes } from '@enums';
import type { LinkData } from './types';

export const linksData: LinkData[] = [
  {
    iconPath: IconNameToSvgIcon[IconName.USER],
    label: 'personalInfo',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_PERSONAL,
  },
  {
    iconPath: IconNameToSvgIcon[IconName.LIST],
    label: 'myList',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_LIST,
  },
  {
    iconPath: IconNameToSvgIcon[IconName.SETTINGS],
    label: 'settings',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_SETTINGS,
  },
  {
    iconPath: IconNameToSvgIcon[IconName.MESSAGE],
    label: 'messages',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_MESSAGES,
  },
  {
    iconPath: IconNameToSvgIcon[IconName.SUPPORT],
    label: 'support',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_SUPPORT,
  },
  {
    iconPath: IconNameToSvgIcon[IconName.SIGN_OUT],
    label: 'signOut',
    path: Routes.DEFAULT,
  },
];
