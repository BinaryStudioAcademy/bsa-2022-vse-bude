import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Http } from '@vse-bude/shared';
import { Layout } from '@components';
import { fetchRandomDataSSR, wrapper } from 'store';
import { CookieStorage, AuthHelper } from '@helpers';
import { Home } from 'components/home/component';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { locale } = ctx;

    const storage = new CookieStorage(ctx);
    const auth = new AuthHelper(storage);
    const httpClient = new Http(process.env.NEXT_PUBLIC_API_ROUTE, auth);

    await store.dispatch(fetchRandomDataSSR(httpClient));

    return Promise.resolve({
      props: {
        ...(await serverSideTranslations(locale, [
          'home',
          'product',
          'common',
        ])),
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
