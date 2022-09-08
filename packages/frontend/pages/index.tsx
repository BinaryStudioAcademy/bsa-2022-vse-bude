import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { wrapper } from 'store';
import { withPublic } from '@hocs';
import { AuthHelper, CookieStorage } from '@helpers';
import { fetchCategoriesSSR } from 'store/category';
import type { ProductDto } from '@vse-bude/shared';
import { Http } from '@vse-bude/shared';
import { getPopularLots, getPopularProducts } from 'services/product';
import type { HomeProps } from '@components/home/types';
import { Layout } from '@components/layout';
import { Home } from '@components/home';

export const getServerSideProps = withPublic(
  wrapper.getServerSideProps((store) => async (ctx) => {
    const { locale } = ctx;
    let auctionProducts: ProductDto[] = [];
    let sellingProducts: ProductDto[] = [];

    const cookieStorage = new CookieStorage(ctx);
    const auth = new AuthHelper(cookieStorage);

    const httpClient = new Http(
      process.env.NEXT_PUBLIC_API_ROUTE,
      locale,
      auth,
    );

    await store.dispatch(
      fetchCategoriesSSR({
        httpSSR: httpClient,
      }),
    );

    try {
      auctionProducts = await getPopularLots({
        httpSSR: httpClient,
        limit: 4,
      });

      sellingProducts = await getPopularProducts({
        httpSSR: httpClient,
        limit: 4,
      });
    } catch (err) {
      console.log(err);
    }

    return {
      props: {
        ...(await serverSideTranslations(locale, ['home', 'common'])),
        auctionProducts,
        sellingProducts,
      },
    };
  }),
);

const IndexPage = ({ auctionProducts, sellingProducts }: HomeProps) => (
  <Layout>
    <Home auctionProducts={auctionProducts} sellingProducts={sellingProducts} />
  </Layout>
);
export default IndexPage;
