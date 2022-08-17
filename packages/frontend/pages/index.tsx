import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Home, Layout } from '@components';
import { wrapper } from 'store';

export const getServerSideProps = wrapper.getServerSideProps(
  () => async (ctx) => {
    const { locale } = ctx;

    return Promise.resolve({
      props: {
        ...(await serverSideTranslations(locale, ['home'])),
      },
    });
  },
);

const IndexPage = () => (
  <Layout>
    <Home />
  </Layout>
);

export default IndexPage;
