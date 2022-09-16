import type { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { Layout } from '@components/layout';
import { Container, Flex } from '@primitives';
import * as styles from './styles';
import type { AboutUsPageProps } from './types';

export const AboutUsLayout: FC<AboutUsPageProps> = ({ children }) => {
  const { t } = useTranslation('about');

  return (
    <Layout>
      <Container>
        <div css={styles.wrapper}>
          <h3 css={styles.pageHeader}>{t('aboutUsPage')}</h3>
          <p>{t('aboutProject')}</p>
          <p>{t('aboutProjectDescription')}</p>
          <p>{t('aboutProjectEnding')}</p>
          <Flex css={styles.pageContent}>{children}</Flex>
        </div>
      </Container>
    </Layout>
  );
};
