import {
  Button,
  Container,
  Dropdown,
  Icon,
  IconButton,
  InternalLink,
} from '@primitives';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { Routes, IconName, IconColorProps } from '@enums';
import { Logo } from 'components/primitives/logo';
import { useAppDispatch, useAuth, useMounted, useTypedSelector } from '@hooks';
import { useRouter } from 'next/router';
import { logoutUser } from 'store/auth';
import { ProfileInfo } from './profile-info';
import * as styles from './styles';

export const Header = () => {
  const [show, setShow] = useState(false);
  const { user } = useAuth();
  const isMounted = useMounted();
  const { push, pathname } = useRouter();
  const { t } = useTranslation();
  const categories = useTypedSelector((state) => state.category.list);
  const dispatch = useAppDispatch();

  const redirectToCategory = (category: string) => {
    const filters = {
      category: category,
    };
    push({
      pathname: Routes.ITEMS,
      query: { filter: JSON.stringify(filters) },
    });
  };

  const renderNavigation = () => (
    <nav className="navigation">
      <Dropdown
        options={categories.map((item) => ({
          value: item.title,
          key: 'home',
          onClick: () => {
            redirectToCategory(item.id);
          },
        }))}
      >
        {t('common:header.nav.category')}&nbsp;
        <Icon icon={IconName.ANGLE_DOWN} color={IconColorProps.YELLOW} />
      </Dropdown>
      <InternalLink
        href={Routes.NEWS}
        label={t('common:header.nav.news')}
        variant={pathname === Routes.NEWS ? 'primary' : 'default'}
      />
      <InternalLink
        href={Routes.ABOUT}
        label={t('common:header.nav.about_us')}
        variant={pathname === Routes.ABOUT ? 'primary' : 'default'}
      />
    </nav>
  );

  const renderAuthButtons = () => (
    <div className="buttons-wrapper">
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
    </div>
  );

  const renderBurgerButton = () => (
    <IconButton
      icon={IconName.LIST}
      size="md"
      onClick={() => setShow(!show)}
      color="yellow"
    />
  );

  const renderHamburderMenuContent = () => (
    <div css={styles.burgerOverlay}>
      <nav className="burger-navigation">
        <Dropdown
          options={categories.map((item) => ({
            value: item.title,
            key: 'home',
            onClick: () => {
              redirectToCategory(item.id);
            },
          }))}
        >
          {t('common:header.nav.category')}&nbsp;
          <Icon icon={IconName.ANGLE_DOWN} color="yellow" />
        </Dropdown>
        <InternalLink
          href={Routes.DEFAULT}
          label={t('common:header.nav.news')}
        />
        <InternalLink
          href={Routes.DEFAULT}
          label={t('common:header.nav.about_us')}
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
            <span css={styles.buttonSignIn}>
              {t('common:header.popover.signOut')}
            </span>
          </Button>
        )}
      </div>

      <div className="burger-close-button">{renderCloseBurgerButton()}</div>
    </div>
  );

  const renderCloseBurgerButton = () => (
    <IconButton
      icon={IconName.ANGLE_UP}
      size="md"
      onClick={() => setShow(!show)}
      color="yellow"
    />
  );

  const renderProfileInfo = () => <ProfileInfo />;

  return (
    <Fragment>
      <header css={styles.header}>
        <Container cssExtend={styles.headerInner}>
          <Link href={Routes.DEFAULT}>
            <a>
              <Logo />
            </a>
          </Link>
          <div className="header-content">{renderNavigation()}</div>

          {isMounted ? (
            <>
              {user ? (
                <div className="header-content">{renderProfileInfo()}</div>
              ) : (
                <div className="header-content">{renderAuthButtons()}</div>
              )}
            </>
          ) : (
            <div />
          )}
          <div className="burger-menu-button">{renderBurgerButton()}</div>
        </Container>
      </header>
      {show && renderHamburderMenuContent()}
    </Fragment>
  );
};
