import { Filter, Layout } from '@components';
import { useRouter } from 'next/router';
import { wrapper } from 'store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ProductType } from '@vse-bude/shared';
import type { ProductDto } from '@vse-bude/shared';
import { fetchProducts } from 'store/product';
import { withPublic } from '@helpers';

export interface FilteredPageProps {
  auctionProducts: ProductDto[];
}

export const getServerSideProps = withPublic(
  wrapper.getServerSideProps((store) => async (ctx) => {
    const { locale } = ctx;

    const auctionProducts = await store
      .dispatch(fetchProducts({ limit: 5, type: ProductType.AUCTION }))
      .then((res) => res.payload);

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
      <Filter filter={filter} lots={auctionProducts} />
    </Layout>
  );
};

export default FilteredPage;
