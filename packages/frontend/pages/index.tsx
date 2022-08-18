import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Home, Layout } from '@components';
import { wrapper } from 'store';

export const getServerSideProps = wrapper.getServerSideProps(
  (_store) => async (ctx) => {
    const { locale } = ctx;

    // const storage = new CookieStorage(ctx);
    // const auth = new AuthHelper(storage);
    // const httpClient = new Http(process.env.NEXT_PUBLIC_API_ROUTE, auth);

    // await store.dispatch(fetchRandomDataSSR(httpClient));

    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'home',
          'product',
          'common',
          'footer',
        ])),
      },
    };
  },
);

const IndexPage = () => (
  <Layout>
    <Home />
  </Layout>
);

export default IndexPage;
