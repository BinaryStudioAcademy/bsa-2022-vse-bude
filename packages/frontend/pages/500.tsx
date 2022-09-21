import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { NextPageContext } from 'next';
import { ErrorPage } from '@components/errorPage';

export const getStaticProps = async (ctx: NextPageContext) => {
  const { locale } = ctx;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['errors'])),
    },
  };
};

const NotFoundPage = () => {
  const { t } = useTranslation('errors');

  return <ErrorPage statusCode={500} description={t('500.description')} />;
};

export default NotFoundPage;
