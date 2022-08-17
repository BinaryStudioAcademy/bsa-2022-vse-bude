import { IconName, IconNameToClassName, Routes, AccountRoutes } from '@enums';
import type { LinkData } from './types';

export const linksData: LinkData[] = [
  {
    iconPath: IconNameToClassName[IconName.USER],
    label: 'PERSONAL_INFO',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_PERSONAL,
  },
  {
    iconPath: IconNameToClassName[IconName.LIST],
    label: 'MY_LIST',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_LIST,
  },
  {
    iconPath: IconNameToClassName[IconName.SETTINGS],
    label: 'SETTINGS',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_SETTINGS,
  },
  {
    iconPath: IconNameToClassName[IconName.MESSAGE],
    label: 'MESSAGES',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_MESSAGES,
  },
  {
    iconPath: IconNameToClassName[IconName.SUPPORT],
    label: 'SUPPORT',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_SUPPORT,
  },
  {
    iconPath: IconNameToClassName[IconName.SIGN_OUT],
    label: 'SIGN_OUT',
    path: Routes.DEFAULT,
  },
];
