import { Layout } from '@components';
import { useRouter } from 'next/router';
import { wrapper } from 'store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Filter } from '@components';

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

  return (
    <Layout title="Filtered posts">
      <Filter filter={filter} />
    </Layout>
  );
};

export default FilteredPage;
