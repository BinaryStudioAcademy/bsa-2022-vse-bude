import type { CategoryDto, UserDto } from '@vse-bude/shared';
import { Routes, IconName, IconColor } from '@enums';
import { IconButton, InternalLink, Button } from '@primitives';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useAppDispatch } from '@hooks';
import { logoutUser } from 'store/auth';
import React from 'react';
import { CategoriesList } from '../navigation/categories-list/component';
import { ProfileDropdown } from './profile-dropdown/component';

import * as styles from './styles';

interface BurgerMenuProps {
  user: UserDto;
  categories: CategoryDto[];
  onClose: () => void;
}

export const BurgerMenu = ({ user, categories, onClose }: BurgerMenuProps) => {
  const { t } = useTranslation();
  const { push, pathname } = useRouter();
  const dispatch = useAppDispatch();

  const renderCloseBurgerButton = () => (
    <IconButton
      icon={IconName.ANGLE_UP}
      size="md"
      onClick={onClose}
      color={IconColor.ORANGE}
      ariaLabel={t('common:header.buttons.closeMenu')}
    />
  );

  return (
    <div css={styles.burgerOverlay}>
      <nav className="burger-navigation">
        {user && <ProfileDropdown user={user} onCloseParent={onClose} />}
        <CategoriesList categories={categories} />
        {/* <InternalLink
          href={Routes.DEFAULT}
          label={t('common:header.nav.news')}
          variant={pathname === Routes.NEWS ? 'primary' : 'default'}
        /> */}
        <InternalLink
          href={Routes.ABOUT}
          label={t('common:header.nav.about_us')}
          variant={pathname === Routes.ABOUT ? 'primary' : 'default'}
        />
      </nav>

      <div className="burger-buttons-wrapper">
        {!user ? (
          <React.Fragment>
            <Button size="small" onClick={() => push(Routes.SIGN_UP)}>
              <span css={styles.buttonCreateAccountText}>
                {t('common:header.buttons.create_account')}
              </span>
            </Button>

            <Button
              size="small"
              variant="outlined"
              onClick={() => push(Routes.SIGN_IN)}
            >
              <span css={styles.buttonSignIn}>
                {t('common:header.buttons.sign_in')}
              </span>
            </Button>
          </React.Fragment>
        ) : (
          <Button size="small" onClick={() => dispatch(logoutUser())}>
            {t('common:header.popover.signOut')}
          </Button>
        )}
      </div>

      <div className="burger-close-button">{renderCloseBurgerButton()}</div>
    </div>
  );
};
