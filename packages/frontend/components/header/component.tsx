import {
  Button,
  Container,
  Dropdown,
  Icon,
  InternalLink,
  ProfileInfo,
} from '@primitives';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { Routes, IconName } from '@enums';
import { Logo } from 'components/primitives/logo';
import { useCheckAuth } from '@hooks';
import * as styles from './styles';

export const Header = () => {
  const { t } = useTranslation('common');
  const [show, setShow] = useState(false);

  const { isAuth, user } = useCheckAuth();

  const renderNavigation = () => (
    <nav className="navigation">
      <InternalLink href={Routes.DEFAULT} label={t('header.nav.home')} />
      <Dropdown
        options={[
          {
            value: 'Home',
            key: 'home',
            onClick: () => {
              console.log('home');
            },
          },
          {
            value: 'About',
            key: 'about',
            onClick: () => {
              console.log('about');
            },
            disabled: true,
          },
        ]}
      >
        {t('header.nav.category')}&nbsp;
        <Icon icon={IconName.ANGLE_DOWN} color="yellow" />
      </Dropdown>
      <InternalLink href={Routes.DEFAULT} label={t('header.nav.search')} />
      <InternalLink href={Routes.DEFAULT} label={t('header.nav.news')} />
      <InternalLink href={Routes.DEFAULT} label={t('header.nav.about_us')} />
    </nav>
  );

  const renderAuthButtons = () => (
    <div className="buttons-wrapper">
      <Button size="small">
        <span css={styles.buttonCreateAccountText}>
          {t('header.buttons.create_account')}
        </span>
      </Button>
      <Button size="small" variant="outlined">
        <span css={styles.buttonSignIn}>{t('header.buttons.sign_in')}</span>
      </Button>
    </div>
  );

  const renderBurgerButton = () => (
    <button onClick={() => setShow(!show)}>
      <Icon icon={IconName.LIST} color="yellow" />
    </button>
  );

  const renderHamburderMenuContent = () => (
    <div css={styles.burgerOverlay}>
      <nav className="burger-navigation">
        <InternalLink href={Routes.DEFAULT} label={t('header.nav.home')} />
        <Dropdown
          options={[
            {
              value: 'Home',
              key: 'home',
              onClick: () => {
                console.log('home');
              },
            },
            {
              value: 'About',
              key: 'about',
              onClick: () => {
                console.log('about');
              },
              disabled: true,
            },
          ]}
        >
          {t('header.nav.category')}&nbsp;
          <Icon icon={IconName.ANGLE_DOWN} color="yellow" />
        </Dropdown>
        <InternalLink href={Routes.DEFAULT} label={t('header.nav.search')} />
        <InternalLink href={Routes.DEFAULT} label={t('header.nav.news')} />
        <InternalLink href={Routes.DEFAULT} label={t('header.nav.about_us')} />
      </nav>
      <div className="burger-buttons-wrapper">
        <Button size="small">
          <span css={styles.buttonCreateAccountText}>
            {t('header.buttons.create_account')}
          </span>
        </Button>
        <Button size="small" variant="outlined">
          <span css={styles.buttonSignIn}>{t('header.buttons.sign_in')}</span>
        </Button>
      </div>
      <div className="burger-close-button">{renderCloseBurgerButton()}</div>
    </div>
  );

  const renderCloseBurgerButton = () => (
    <button onClick={() => setShow(!show)}>
      <Icon icon={IconName.ANGLE_UP} color="yellow" />
    </button>
  );

  const renderProfileInfo = () => (
    <ProfileInfo
      image={user.avatar}
      firstName={user.firstName}
      lastName={user.lastName}
    />
  );

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

          {isAuth ? (
            <div className="header-content">{renderProfileInfo()}</div>
          ) : (
            <div className="header-content">{renderAuthButtons()}</div>
          )}
          <div className="burger-menu-button">{renderBurgerButton()}</div>
        </Container>
      </header>
      {show && renderHamburderMenuContent()}
    </Fragment>
  );
};
