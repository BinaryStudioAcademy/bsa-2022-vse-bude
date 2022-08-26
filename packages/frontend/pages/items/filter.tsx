import { Layout } from '@components';
import { useRouter } from 'next/router';
import { wrapper } from 'store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Filter } from '@components';
import { AuthHelper, CookieStorage, withPublic } from '@helpers';
import { Http, ProductType } from '@vse-bude/shared';
import { getProductsSSR } from 'services/product';
import { fetchCategoriesSSR } from 'store/category';
import type { FilteredPageProps } from './types';

export const getServerSideProps = withPublic(
  wrapper.getServerSideProps((store) => async (ctx) => {
    const { locale } = ctx;

    const storage = new CookieStorage(ctx);
    const auth = new AuthHelper(storage);
    const httpClient = new Http(process.env.NEXT_PUBLIC_API_ROUTE, auth);

    await store.dispatch(fetchCategoriesSSR({ httpSSR: httpClient, limit: 5 }));
    const auctionProducts = await getProductsSSR({
      httpSSR: httpClient,
      limit: 5,
      type: ProductType.AUCTION,
    });
    
    return {
      props: {
          ...(await serverSideTranslations(locale, ['common'])),
          auctionProducts,
        },
    };
  }),
);

const FilteredPage = ({ auctionProducts }: FilteredPageProps) => {
  const router = useRouter();
  const filter = router.query.filter as string;
  
  return (
    <Layout title="Filtered posts">
      <Filter filter={filter} lots={auctionProducts}/>
    </Layout>
  );
};

export default FilteredPage;
