import { Routes, ProfileRoutes } from '@enums';
import type { TFunction } from 'next-i18next';

type linkDetails = {
  name: string;
  route: string;
};

export const breadcrumbsPaths = ({
  t,
  id,
}: {
  t: TFunction;
  id: string;
}): linkDetails[] => [
  { name: t('my-list:breadcrumbs.home'), route: Routes.DEFAULT },
  { name: t('my-list:breadcrumbs.profile'), route: `${Routes.PROFILE}/${id}` },
  {
    name: t('my-list:breadcrumbs.myList'),
    route: `${Routes.PROFILE}${ProfileRoutes.LIST}`,
  },
];
