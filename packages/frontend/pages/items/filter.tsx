import { Filter, Layout } from '@components';
import { useRouter } from 'next/router';
import { wrapper } from 'store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withPublic } from '@helpers';
import { useTypedSelector } from '@hooks';

export const getServerSideProps = withPublic(
  wrapper.getServerSideProps((_store) => async ({ locale }) => ({
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
    })),
);

const FilteredPage = () => {
  const router = useRouter();
  const filter = router.query.filter as string;
  const { list } = useTypedSelector((state) => state.product);
  
  return (
    <Layout title="Filtered posts">
      <Filter filter={filter} lots={list} />
    </Layout>
  );
};

export default FilteredPage;
