import { Filter, Layout } from '@components';
import { useRouter } from 'next/router';
import { wrapper } from 'store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { fetchProducts } from 'store/product';
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
  const query = router.query as unknown as string;
  const { list } = useTypedSelector((store) => store.product);
  const filter = Object.fromEntries(new URLSearchParams(query));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts(filter));
  }, [dispatch, filter]);

  return (
    <Layout title="Filtered posts">
      <Filter lots={list} />
    </Layout>
  );
};

export default FilteredPage;
