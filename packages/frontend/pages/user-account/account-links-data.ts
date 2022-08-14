import profile from '../../public/images/account-page/personal-info-icon.svg';
import mylist from '../../public/images/account-page/my-list-icon.svg';
import settings from '../../public/images/account-page/settings-icon.svg';
import messages from '../../public/images/account-page/chat-icon.svg';
import support from '../../public/images/account-page/support-icon.svg';
import signout from '../../public/images/account-page/sign-out-icon.svg';
import { Routes, AccountRoutes } from '../../common/enums';
import type { LinkData } from './types';

export const linksData: LinkData[] = [
  {
    iconPath: profile,
    width: 22,
    height: 22,
    label: 'PERSONAL_INFO',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_PERSONAL,
  },
  {
    iconPath: mylist,
    width: 22,
    height: 22,
    label: 'MY_LIST',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_LIST,
  },
  {
    iconPath: settings,
    width: 22,
    height: 22,
    label: 'SETTINGS',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_SETTINGS,
  },
  {
    iconPath: messages,
    width: 22,
    height: 22,
    label: 'MESSAGES',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_MESSAGES,
  },
  {
    iconPath: support,
    width: 22,
    height: 22,
    label: 'SUPPORT',
    path: Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_SUPPORT,
  },
  {
    iconPath: signout,
    width: 22,
    height: 22,
    label: 'SIGN_OUT',
    path: Routes.DEFAULT,
  },
];
