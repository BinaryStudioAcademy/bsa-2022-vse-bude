import { wrapper } from 'store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout } from '@components/layout';
import { SavePost } from '@components/save-post';
import { ProductType } from '@vse-bude/shared';

export const getServerSideProps = wrapper.getServerSideProps(
  (_store) =>
    async ({ locale }) => ({
      props: {
        ...(await serverSideTranslations(locale, [
          'common',
          'create-post',
          'rules',
        ])),
      },
    }),
);

const CreatePage = () => (
  <Layout title="Create auction">
    <SavePost type={ProductType.AUCTION} />
  </Layout>
);
export default CreatePage;
