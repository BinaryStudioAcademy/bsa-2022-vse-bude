import { Routes } from '@enums';
import { Button, Container, Dropdown, Icon, InternalLink } from '@primitives';
import { IconName } from 'common/enums/icons';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { Logo } from '../primitives/logo/component';
import * as styles from './styles';

export const Header = () => {
  const { t } = useTranslation('common');
  const [show, setShow] = useState(false);

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

  const logoSVG = () => (
    <Link href={Routes.DEFAULT}>
      <a>
        <Logo />
      </a>
    </Link>
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

  return (
    <React.Fragment>
      <header css={styles.header}>
        <Container css={styles.headerInner}>
          {logoSVG()}

          <div className="header-content">{renderNavigation()}</div>
          <div className="header-content">{renderAuthButtons()}</div>

          <div className="burger-menu-button">{renderBurgerButton()}</div>
        </Container>
      </header>
      {show && renderHamburderMenuContent()}
    </React.Fragment>
  );
};
