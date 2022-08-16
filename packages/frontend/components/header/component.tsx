import { Routes } from '@enums';
import { Button, Container, Dropdown, Icon, InternalLink } from '@primitives';
import { IconName } from 'common/enums/icons';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '../primitives/logo/component';
import * as styles from './styles';

export const Header = () => {
  const { t } = useTranslation('common');
  const [show, setShow] = useState(false);

  return (
    <header css={styles.header}>
      <Container css={styles.headerWrapper}>
        <LogoSVG />

        <div className="header-content">{renderNavigation(t)}</div>
        <div className="header-content">{renderAuthButtons(t)}</div>

        <div className="burger-menu-button">
          {ButtonBurgerTrigger(() => setShow(!show))}
        </div>
      </Container>
      {show && renderHamburderMenuContent(t, () => setShow(!show))}
    </header>
  );
};

const renderNavigation = (t) => (
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

const renderAuthButtons = (t) => (
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

const LogoSVG = () => (
  <Link href={Routes.DEFAULT}>
    <a>
      <Logo />
    </a>
  </Link>
);

const ButtonBurgerTrigger = (onClick) => (
  <button onClick={onClick}>
    <Icon icon={IconName.LIST} color="yellow" />
  </button>
);

const renderHamburderMenuContent = (t, onClick) => (
  <div className="burger-overlay">
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
    <div className="burger-close-button">{ButtonCloseBurger(onClick)}</div>
  </div>
);

const ButtonCloseBurger = (onClick) => (
  <button onClick={onClick}>
    <Icon icon={IconName.ANGLE_UP} color="yellow" />
  </button>
);
