import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Home, Layout } from '@components';
import { wrapper } from 'store';
import { AuthHelper, CookieStorage } from '@helpers';
import { fetchCategoriesSSR } from 'store/category';
import { Http } from '@vse-bude/shared';
import {
  fetchAuctionProductsSSR,
  fetchSellingProductsSSR,
} from 'store/product';

export const getServerSideProps = wrapper.getServerSideProps(
  (_store) => async (ctx) => {
    const { locale } = ctx;

    const storage = new CookieStorage(ctx);
    const auth = new AuthHelper(storage);
    const httpClient = new Http(process.env.NEXT_PUBLIC_API_ROUTE, auth);

    await _store.dispatch(fetchCategoriesSSR(httpClient));
    await _store.dispatch(
      fetchAuctionProductsSSR({ httpSSR: httpClient, limit: 4 }),
    );
    await _store.dispatch(
      fetchSellingProductsSSR({ httpSSR: httpClient, limit: 4 }),
    );

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
