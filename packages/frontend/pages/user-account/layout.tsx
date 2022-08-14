import type { FC } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Layout } from '@components';
import { Container, Flex } from '@primitives';
import { DashboardLink } from '../../components/primitives/dashboard-link';
import { linksData } from './account-links-data';
import * as styles from './styles';
import type { AccountPageProps } from './types';

export const AccountLayout: FC<AccountPageProps> = ({ children }) => {
  const router = useRouter();
  const { t } = useTranslation(['dashboard', 'page-titles']);

  return (
    <Layout>
      <Container>
        <div css={styles.wrapper}>
          <h3 css={styles.pageHeader}>
            {t('ACCOUNT_PAGE', { ns: 'page-titles' })}
          </h3>
          <Flex css={styles.pageContent}>
            <Flex css={styles.linksContainer}>
              {linksData.map((link, idx) => {
                const { height, width, iconPath, label, path } = link;
                const location = router.pathname === link.path;
                const tLabel = t(label);

                return (
                  <DashboardLink
                    key={path + idx}
                    height={height}
                    width={width}
                    iconPath={iconPath}
                    label={tLabel}
                    location={location}
                    path={path}
                  />
                );
              })}
            </Flex>

            {children}
          </Flex>
        </div>
      </Container>
    </Layout>
  );
};
