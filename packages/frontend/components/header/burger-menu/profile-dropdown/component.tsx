import { Dropdown, Icon } from '@primitives';
import type { UserDto } from '@vse-bude/shared';
import { useRouter } from 'next/router';
import { Routes, IconColor, IconName, ProfileRoutes } from '@enums';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useAppDispatch } from '@hooks';
import { showMakePostModal } from 'store/modals/actions';
import { logoutUser } from 'store/auth';
import * as styles from './styles';

interface ProfileDropdownProps {
  user: UserDto;
  onCloseParent: () => void;
}
export const ProfileDropdown = ({
  user,
  onCloseParent,
}: ProfileDropdownProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  const handleMakePostClick = () => {
    dispatch(showMakePostModal());
    onCloseParent();
  };
  const handleLogoutClick = () => {
    dispatch(logoutUser());
    onCloseParent();
  };

  const options = [
    {
      value: t('common:header.popover.makePost'),
      key: 'Make a post',
      onClick: handleMakePostClick,
      cssExtend: styles.option,
      disabled: !user?.emailVerified || !user?.phoneVerified,
    },
    {
      value: t('common:header.popover.personalInfo'),
      key: 'Personal info',
      onClick: () => push(`${Routes.PROFILE}/${user.id}`),
      cssExtend: styles.option,
    },
    {
      value: t('common:header.popover.myList'),
      key: 'My list',
      onClick: () => push(`${Routes.PROFILE}${ProfileRoutes.LIST}`),
      cssExtend: styles.option,
    },
    {
      value: t('common:header.popover.notifications'),
      key: 'Notifications',
      onClick: () => push(`${Routes.PROFILE}${ProfileRoutes.NOTIFICATIONS}`),
      cssExtend: styles.option,
    },
    // {
    //   value: t('common:header.popover.settings'),
    //   key: 'Settings',
    //   onClick: () => push(`${Routes.PROFILE}${ProfileRoutes.ACCOUNT_SETTINGS}`),
    //   cssExtend: styles.option,
    // },
    // {
    //   value: t('common:header.popover.messages'),
    //   key: 'Messages',
    //   onClick: () => push(`${Routes.PROFILE}${ProfileRoutes.MESSAGES}`),
    //   cssExtend: styles.option,
    // },
    // {
    //   value: t('common:header.popover.support'),
    //   key: 'Support',
    //   onClick: () =>
    //     (location.href = 'mailto:vsebude.team@gmail.com?subject=Support'),
    //   cssExtend: styles.option,
    // },
    {
      value: t('common:header.popover.signOut'),
      key: 'signOut',
      onClick: handleLogoutClick,
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
