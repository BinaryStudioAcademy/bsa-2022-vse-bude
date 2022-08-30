import { Filter, Layout } from '@components';
import { wrapper } from 'store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps = wrapper.getServerSideProps(
  (_store) =>
    async ({ locale }) => ({
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
    }),
);

const FilteredPage = () => (
    <Layout title="Filtered posts">
      <Filter />
    </Layout>
  );

export default FilteredPage;
