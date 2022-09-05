import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { wrapper } from 'store';
import { withPublic } from '@hocs';
import { AuthHelper, CookieStorage } from '@helpers';
import { fetchCategoriesSSR } from 'store/category';
import type { HttpAcceptLanguage, ProductDto } from '@vse-bude/shared';
import { Http, ProductType } from '@vse-bude/shared';
import { getProductsSSR } from 'services/product';
import type { HomeProps } from '@components/home/types';
import { Layout } from '@components/layout';
import { Home } from '@components/home';
import { StorageService } from 'helpers/storage';

export const getServerSideProps = withPublic(
  wrapper.getServerSideProps((store) => async (ctx) => {
    const { locale } = ctx;
    let auctionProducts: ProductDto[] = [];
    let sellingProducts: ProductDto[] = [];

    const cookieStorage = new CookieStorage(ctx);
    const auth = new AuthHelper(cookieStorage);
    const storage = new StorageService(auth);
    const httpClient = new Http(process.env.NEXT_PUBLIC_API_ROUTE, storage);

    await store.dispatch(
      fetchCategoriesSSR({
        httpSSR: httpClient,
        locale: locale as HttpAcceptLanguage,
      }),
    );

    try {
      const products = await Promise.all([
        getProductsSSR({
          httpSSR: httpClient,
          limit: 4,
          type: ProductType.AUCTION,
        }),
        getProductsSSR({
          httpSSR: httpClient,
          limit: 4,
          type: ProductType.SELLING,
        }),
      ]);

      auctionProducts = products[0];
      sellingProducts = products[1];
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
