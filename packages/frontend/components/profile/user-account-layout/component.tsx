import type { FC } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAuth } from '@hooks';
import { useTranslation } from 'next-i18next';
import { Layout } from '@components/layout';
import { Container, Flex, Icon } from '@primitives';
import { logoutUser } from 'store/auth';
import { IconColor, IconName } from '@enums';
import dynamic from 'next/dynamic';
import { DashboardLink } from './dashboard-link';
import type { AccountPageProps } from './types';
import { getLinksData } from './account-links-data';
import * as styles from './styles';

const PostTypeModal = dynamic(
  () => import('@components/make-a-post/type-of-post/component'),
);

export const AccountLayout: FC<AccountPageProps> = ({ children }) => {
  const { query, pathname } = useRouter();
  const { t } = useTranslation();
  const { user: authUser } = useAuth();
  const [isOpenTypeOfPost, setIsOpenTypeOfPost] = useState(false);

  const dispatch = useAppDispatch();

  return (
    <Layout>
      <Container>
        {isOpenTypeOfPost && (
          <PostTypeModal
            isOpen={isOpenTypeOfPost}
            setIsOpen={setIsOpenTypeOfPost}
          />
        )}
        <div css={styles.wrapper}>
          <h3 css={styles.pageHeader}>{t('account:accountPage')}</h3>
          <Flex css={styles.pageContent}>
            {authUser?.id === query.id && (
              <div css={styles.linksContainer}>
                <button
                  onClick={() => setIsOpenTypeOfPost(true)}
                  css={styles.makePostButton}
                >
                  <Flex css={styles.makePostContent}>
                    <Icon icon={IconName.XMARK} color={IconColor.BLACK} />
                    <div>
                      <span css={styles.makePostLabel}>
                        {t('account:makePost')}
                      </span>
                    </div>
                  </Flex>
                </button>
                {getLinksData(query.id as string).map((link, idx) => {
                  const { iconPath, label, path } = link;
                  const location = pathname === link.path;
                  const tLabel = t(label);

                  return (
                    <DashboardLink
                      key={path + idx}
                      iconPath={iconPath}
                      label={tLabel}
                      location={location}
                      path={path}
                      onClick={
                        label === 'account:signOut'
                          ? () => dispatch(logoutUser())
                          : null
                      }
                    />
                  );
                })}
              </div>
            )}

            {children}
          </Flex>
        </div>
      </Container>
    </Layout>
  );
};
