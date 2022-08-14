import profile from '../../public/images/account-page/personal-info-icon.svg';
import mylist from '../../public/images/account-page/my-list-icon.svg';
import settings from '../../public/images/account-page/settings-icon.svg';
import messages from '../../public/images/account-page/chat-icon.svg';
import support from '../../public/images/account-page/support-icon.svg';
import signout from '../../public/images/account-page/sign-out-icon.svg';
import type { LinksData } from './types';

export const linksData: LinksData[] = [
  {
    iconPath: profile,
    width: 22,
    height: 22,
    label: 'Personal Info',
    path: '/user-account/dashboard/profile-info',
  },
  {
    iconPath: mylist,
    width: 22,
    height: 22,
    label: 'My List',
    path: '/user-account/dashboard/my-list',
  },
  {
    iconPath: settings,
    width: 22,
    height: 22,
    label: 'Settings',
    path: '/user-account/dashboard/settings',
  },
  {
    iconPath: messages,
    width: 22,
    height: 22,
    label: 'Messages',
    path: '/user-account/dashboard/messages',
  },
  {
    iconPath: support,
    width: 22,
    height: 22,
    label: 'Support',
    path: '/user-account/dashboard/support',
  },
  {
    iconPath: signout,
    width: 22,
    height: 22,
    label: 'Sign Out',
    path: '/',
  },
];
