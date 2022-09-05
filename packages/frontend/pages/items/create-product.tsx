import { wrapper } from 'store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ConsentModal } from '@components/make-a-post/consent';
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
  <Layout title="Create post">
    <ConsentModal></ConsentModal>
    <SavePost type={ProductType.SELLING} />
  </Layout>
);
export default CreatePage;
