import { IconName, Routes, ProfileRoutes } from '@enums';
import type { LinkData } from './types';

export const getLinksData = (userId: string): LinkData[] => [
  {
    iconPath: IconName.USER,
    label: 'account:personalInfo',
    path: `${Routes.PROFILE}/${userId}${ProfileRoutes.PERSONAL_INFO}`,
  },
  {
    iconPath: IconName.LIST,
    label: 'account:myList',
    path: `${Routes.PROFILE}/${userId}${ProfileRoutes.LIST}`,
  },
  {
    iconPath: IconName.SETTINGS,
    label: 'account:settings',
    path: `${Routes.PROFILE}/${userId}${ProfileRoutes.ACCOUNT_SETTINGS}`,
  },
  {
    iconPath: IconName.MESSAGE,
    label: 'account:messages',
    path: `${Routes.PROFILE}/${userId}${ProfileRoutes.MESSAGES}`,
  },
  {
    iconPath: IconName.SUPPORT,
    label: 'account:support',
    path: `${Routes.PROFILE}/${userId}${ProfileRoutes.SUPPORT}`,
  },
  {
    iconPath: IconName.SIGN_OUT,
    label: 'account:signOut',
    path: Routes.DEFAULT,
  },
];