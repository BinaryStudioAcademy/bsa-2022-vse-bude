import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout, RulesPageInner } from '@components';
import { wrapper } from 'store';
import { withPublic } from '@hocs';
import { useTranslation } from 'next-i18next';

export const getStaticProps = withPublic(
  wrapper.getServerSideProps(() => async (ctx) => {
    const { locale } = ctx;

    return {
      props: {
        ...(await serverSideTranslations(locale, ['rules', 'common'])),
      },
    };
  }),
);

const RulesPage = () => {
  const { t } = useTranslation('rules');

  return (
    <Layout title={t('title')}>
      <RulesPageInner />
    </Layout>
  );
};

export default RulesPage;
