import { Button, Container, Flex, IconButton, Loader } from '@primitives';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Fragment, useState, useEffect, Suspense } from 'react';
import { Routes, IconName, IconColor } from '@enums';
import { Logo } from 'components/primitives/logo';
import {
  useAppDispatch,
  useAuth,
  useMounted,
  useTypedSelector,
  useWindowSize,
} from '@hooks';
import { useRouter } from 'next/router';
import { fetchCategories } from 'store/category';
import { shallowEqual } from 'react-redux';
import Search from './search/component';
import { ProfileInfo } from './profile-info';
import { Navigation } from './navigation/component';
import { BurgerMenu } from './burger-menu/component';
import * as styles from './styles';

export const Header = () => {
  const [show, setShow] = useState(false);
  const { user, loading } = useAuth();
  const isMounted = useMounted();
  const { push, locale } = useRouter();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [searchOpen, setSearchOpen] = useState(false);

  const categories = useTypedSelector(
    (state) => state.category.listInUse,
    shallowEqual,
  );
  const size = useWindowSize();

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories());
    }
  }, [dispatch, locale, categories]);

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
      ariaLabel={t('common:header.buttons.openMenu')}
    />
  );

  const renderProfileInfo = () => <ProfileInfo load={loading} />;

  return (
    <Fragment>
      <header css={styles.header}>
        <Container cssExtend={styles.headerInner}>
          <Flex align="center">
            <Link prefetch={false} href={Routes.DEFAULT}>
              <a>
                <Logo />
              </a>
            </Link>
            <div className="header-content">
              <Navigation categories={categories || []} />
            </div>
          </Flex>

          <Flex align="center">
            {isMounted && (
              <>
                <Suspense fallback={<Loader size="extraSmall" />}>
                  {size.width > 600 ? (
                    <Search setSearchOpen={setSearchOpen} />
                  ) : (
                    <>
                      {searchOpen ? (
                        <Search setSearchOpen={setSearchOpen} />
                      ) : (
                        <IconButton
                          cssExtend={styles.searchButton}
                          icon={IconName.SEARCH}
                          size="md"
                          onClick={() => setSearchOpen(!searchOpen)}
                          color={IconColor.BLACK}
                          ariaLabel={t('common:header.buttons.openMenu')}
                        />
                      )}
                    </>
                  )}
                  {user || loading ? (
                    <div className="header-btn-group">
                      {renderProfileInfo()}
                    </div>
                  ) : (
                    <div className="header-btn-group">
                      {renderAuthButtons()}
                    </div>
                  )}
                </Suspense>
              </>
            )}
            <div className="burger-menu-button">{renderBurgerButton()}</div>
          </Flex>
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
