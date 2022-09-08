import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { wrapper } from 'store';
import { fetchCategoriesSSR } from 'store/category';
import type { ProductDto } from '@vse-bude/shared';
import { Http } from '@vse-bude/shared';
import { getPopularLots, getPopularProducts } from 'services/product';
import type { HomeProps } from '@components/home/types';
import { Layout } from '@components/layout';
import { Home } from '@components/home';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { locale } = ctx;
    let auctionProducts: ProductDto[] = [];
    let sellingProducts: ProductDto[] = [];

    const httpClient = new Http(process.env.NEXT_PUBLIC_API_ROUTE, locale);

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
  },
);

const IndexPage = ({ auctionProducts, sellingProducts }: HomeProps) => (
  <Layout>
    <Home auctionProducts={auctionProducts} sellingProducts={sellingProducts} />
  </Layout>
);
export default IndexPage;
