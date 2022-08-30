import { Filter, Layout } from '@components';
import { useRouter } from 'next/router';
import { wrapper } from 'store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { fetchProducts } from 'store/product';
import { ProductType } from '@vse-bude/shared';
import { useEffect } from 'react';

export const getServerSideProps = wrapper.getServerSideProps(
  (_store) =>
    async ({ locale }) => ({
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
    }),
);

const FilteredPage = () => {
  const router = useRouter();
  const filter = router.query.filter as string;
  const { list } = useTypedSelector((store) => store.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ limit: 5, type: ProductType.AUCTION }));
  }, [dispatch]);

  return (
    <Layout title="Filtered posts">
      <Filter filter={filter} lots={list} />
    </Layout>
  );
};

export default FilteredPage;
