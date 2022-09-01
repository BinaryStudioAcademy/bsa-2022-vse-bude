import { Dropdown, Icon } from '@primitives';
import type { UserDto } from '@vse-bude/shared';
import { useRouter } from 'next/router';
import { Routes, IconColor, IconName, ProfileRoutes } from '@enums';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';

import * as styles from './styles';

interface ProfileDropdownProps {
  user: UserDto;
}
export const ProfileDropdown = ({ user }: ProfileDropdownProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { push } = useRouter();

  const options = [
    {
      value: t('common:header.popover.personalInfo'),
      key: 'Personal info',
      onClick: () => push(`${Routes.PROFILE}/${user.id}`),
      cssExtend: styles.option,
    },
    {
      value: t('common:header.popover.myList'),
      key: 'My list',
      onClick: () => push(`${Routes.PROFILE}/${user.id}${ProfileRoutes.LIST}`),
      cssExtend: styles.option,
    },
    {
      value: t('common:header.popover.settings'),
      key: 'Settings',
      onClick: () =>
        push(`${Routes.PROFILE}/${user.id}${ProfileRoutes.ACCOUNT_SETTINGS}`),
      cssExtend: styles.option,
    },
    {
      value: t('common:header.popover.messages'),
      key: 'Messages',
      onClick: () =>
        push(`${Routes.PROFILE}/${user.id}${ProfileRoutes.MESSAGES}`),
      cssExtend: styles.option,
    },
    {
      value: t('common:header.popover.support'),
      key: 'Support',
      onClick: () =>
        push(`${Routes.PROFILE}/${user.id}${ProfileRoutes.SUPPORT}`),
      cssExtend: styles.option,
    },
  ];

  return (
    <Dropdown
      options={options}
      onChildrenClick={() => setIsOpen(!isOpen)}
      cssExtend={styles.wrapper}
    >
      {t('common:header.nav.profile')}&nbsp;
      {isOpen ? (
        <Icon icon={IconName.ANGLE_UP} color={IconColor.BLACK} />
      ) : (
        <Icon icon={IconName.ANGLE_DOWN} color={IconColor.BLACK} />
      )}
    </Dropdown>
  );
};
