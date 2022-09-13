import { Routes, ProfileRoutes } from '@enums';

const userPaths = [
  `${Routes.PROFILE}${ProfileRoutes.LIST}`,
  `${Routes.PROFILE}${ProfileRoutes.ACCOUNT_SETTINGS}`,
  `${Routes.PROFILE}${ProfileRoutes.MESSAGES}`,
  `${Routes.PROFILE}${ProfileRoutes.SUPPORT}`,
];

export const isInAccount = ({
  id,
  path,
}: {
  id: string;
  path: string;
}): boolean => id && userPaths.some((it) => it === path);