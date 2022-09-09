import { wrapper } from 'store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout } from '@components/layout';
import { Filter } from '@components/filter';
import '@splidejs/react-splide/css';

export const getServerSideProps = wrapper.getServerSideProps(
  (_store) =>
    async ({ locale }) => ({
      props: {
        ...(await serverSideTranslations(locale, ['common', 'items-page'])),
      },
    }),
);

const FilteredPage = () => (
  <Layout title="Filtered posts">
    <Filter />
  </Layout>
);

export default FilteredPage;
