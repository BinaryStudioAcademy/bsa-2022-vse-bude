import { Button, Container, IconButton, Loader } from '@primitives';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Fragment, useState, useEffect } from 'react';
import { Routes, IconName, IconColor } from '@enums';
import { Logo } from 'components/primitives/logo';
import { useAppDispatch, useAuth, useMounted, useTypedSelector } from '@hooks';
import { useRouter } from 'next/router';
import { fetchCategories } from 'store/category';
import type { HttpAcceptLanguage } from '@vse-bude/shared';
import { ProfileInfo } from './profile-info';
import { Navigation } from './navigation/component';
import { BurgerMenu } from './burger-menu/component';
import * as styles from './styles';

interface RequestOptions {
  locale?: HttpAcceptLanguage;
}

export const Header = () => {
  const [show, setShow] = useState(false);
  const { user, loading } = useAuth();
  const isMounted = useMounted();
  const { push, locale } = useRouter();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { list: categories, loading: categoriesLoading } = useTypedSelector((state) => state.category);

  useEffect(() => {
    if (categories.length === 0 && !categoriesLoading) {
      const category: RequestOptions = {
        locale: locale as HttpAcceptLanguage,
      };

      dispatch(fetchCategories({ locale: category.locale }));
    }
  }, [dispatch, locale, categories, categoriesLoading]);

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
      color={IconColor.YELLOW}
    />
  );

  const renderProfileInfo = () => {
    if (loading) {
      return <Loader size="extraSmall" />;
    }

    return <ProfileInfo />;
  };

  return (
    <Fragment>
      <header css={styles.header}>
        <Container cssExtend={styles.headerInner}>
          <Link href={Routes.DEFAULT}>
            <a>
              <Logo />
            </a>
          </Link>
          <div className="header-content">
            {<Navigation categories={categories || []} />}
          </div>

          {isMounted && (
            <>
              {user || loading ? (
                <div className="header-content">{renderProfileInfo()}</div>
              ) : (
                <div className="header-content">{renderAuthButtons()}</div>
              )}
            </>
          )}
          <div className="burger-menu-button">{renderBurgerButton()}</div>
        </Container>
      </header>
      {show && (
        <BurgerMenu
          categories={categories || []}
          user={user}
          onClose={() => setShow(false)}
        />
      )}
    </Fragment>
  );
};
