import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { wrapper } from 'store';
import { withPublic } from '@hocs';
import { useTranslation } from 'next-i18next';
import { Layout } from '@components/layout';
import { RulesPageInner } from '@components/rules';

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
  const { t } = useTranslation();

  return (
    <Layout title={t('rules:generalRules.title')}>
      <RulesPageInner />
    </Layout>
  );
};

export default RulesPage;
