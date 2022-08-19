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
import { Fragment, useState } from 'react';
import { Routes, IconName } from '@enums';
import { Logo } from 'components/primitives/logo';
import { useCheckAuth } from '@hooks';
import { useRouter } from 'next/router';
import { AppTheme } from '../../theme';
import { ProfileInfo } from './profile-info';
import * as styles from './styles';

export const Header = () => {
  const [show, setShow] = useState(false);
  const { isAuth, userInfo } = useCheckAuth();
  const { push } = useRouter();
  const { t } = useTranslation('common');

  const renderNavigation = () => (
    <nav className="navigation">
      <InternalLink
        variant="default"
        href={Routes.DEFAULT}
        label={t('header.nav.home')}
      />
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
        <Icon icon={IconName.ANGLE_DOWN} color={AppTheme.colors.extraDark} />
      </Dropdown>
      <InternalLink
        href={Routes.DEFAULT}
        label={t('header.nav.search')}
        variant="default"
      />
      <InternalLink
        href={Routes.DEFAULT}
        label={t('header.nav.news')}
        variant="default"
      />
      <InternalLink
        href={Routes.DEFAULT}
        label={t('header.nav.about_us')}
        variant="default"
      />
    </nav>
  );

  const renderAuthButtons = () => (
    <div className="buttons-wrapper">
      <Button size="small" onClick={() => push(Routes.SIGN_UP)}>
        <span css={styles.buttonCreateAccountText}>
          {t('header.buttons.create_account')}
        </span>
      </Button>

      <Button
        size="small"
        variant="outlined"
        onClick={() => push(Routes.SIGN_IN)}
      >
        <span css={styles.buttonSignIn}>{t('header.buttons.sign_in')}</span>
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
    <IconButton
      icon={IconName.ANGLE_UP}
      size="md"
      onClick={() => setShow(!show)}
      color="yellow"
    />
  );

  const renderProfileInfo = () => (
    <ProfileInfo
      image={userInfo.avatar}
      firstName={userInfo.firstName}
      lastName={userInfo.lastName}
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
