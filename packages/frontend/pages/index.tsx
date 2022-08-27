import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Home, Layout } from '@components';
import { wrapper } from 'store';
import { withPublic } from '@hocs';
import { AuthHelper, CookieStorage } from '@helpers';
import { fetchCategoriesSSR } from 'store/category';
import type { HttpAcceptLanguage } from '@vse-bude/shared';
import { Http, ProductType } from '@vse-bude/shared';
import { getProductsSSR } from 'services/product';
import type { HomeProps } from 'components/home/types';

export const getServerSideProps = withPublic(
  wrapper.getServerSideProps((store) => async (ctx) => {
    const { locale } = ctx;

    const storage = new CookieStorage(ctx);
    const auth = new AuthHelper(storage);
    const httpClient = new Http(process.env.NEXT_PUBLIC_API_ROUTE, auth);

    await store.dispatch(
      fetchCategoriesSSR({
        httpSSR: httpClient,
        limit: 4,
        locale: locale as HttpAcceptLanguage,
      }),
    );
    const auctionProducts = await getProductsSSR({
      httpSSR: httpClient,
      limit: 4,
      type: ProductType.AUCTION,
    });
    const sellingProducts = await getProductsSSR({
      httpSSR: httpClient,
      limit: 4,
      type: ProductType.SELLING,
    });

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
