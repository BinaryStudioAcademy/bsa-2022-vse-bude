import { IconName, IconNameToSvgIcon, Routes, AccountRoutes } from '@enums';
import type { LinkData } from './types';

export const linksData: LinkData[] = [
  {
    iconPath: IconNameToSvgIcon[IconName.USER],
    label: 'PERSONAL_INFO',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_PERSONAL,
  },
  {
    iconPath: IconNameToSvgIcon[IconName.LIST],
    label: 'MY_LIST',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_LIST,
  },
  {
    iconPath: IconNameToSvgIcon[IconName.SETTINGS],
    label: 'SETTINGS',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_SETTINGS,
  },
  {
    iconPath: IconNameToSvgIcon[IconName.MESSAGE],
    label: 'MESSAGES',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_MESSAGES,
  },
  {
    iconPath: IconNameToSvgIcon[IconName.SUPPORT],
    label: 'SUPPORT',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_SUPPORT,
  },
  {
    iconPath: IconNameToSvgIcon[IconName.SIGN_OUT],
    label: 'SIGN_OUT',
    path: Routes.DEFAULT,
  },
];
