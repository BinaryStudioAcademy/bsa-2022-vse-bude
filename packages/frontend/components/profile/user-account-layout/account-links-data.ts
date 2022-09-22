import { IconName, Routes, ProfileRoutes } from '@enums';
import type { LinkData } from './types';

export const getLinksData = (userId: string): LinkData[] => [
  {
    iconPath: IconName.USER,
    label: 'account:personalInfo',
    path: `${Routes.PROFILE}/${userId}`,
  },
  {
    iconPath: IconName.LIST,
    label: 'account:myList',
    path: `${Routes.PROFILE}${ProfileRoutes.LIST}`,
  },
  // {
  //   iconPath: IconName.SETTINGS,
  //   label: 'account:settings',
  //   path: `${Routes.PROFILE}${ProfileRoutes.ACCOUNT_SETTINGS}`,
  // },
  {
    iconPath: IconName.BELL,
    label: 'account:notifications',
    path: `${Routes.PROFILE}${ProfileRoutes.NOTIFICATIONS}`,
  },
  // {
  //   iconPath: IconName.MESSAGE,
  //   label: 'account:messages',
  //   path: `${Routes.PROFILE}${ProfileRoutes.MESSAGES}`,
  // },
  // {
  //   iconPath: IconName.SUPPORT,
  //   label: 'account:support',
  //   path: `${Routes.PROFILE}${ProfileRoutes.SUPPORT}`,
  // },
  {
    iconPath: IconName.SIGN_OUT,
    label: 'account:signOut',
    path: Routes.DEFAULT,
  },
];
