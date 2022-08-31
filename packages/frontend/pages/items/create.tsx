import { Layout, SavePost } from '@components';
import { useRouter } from 'next/router';
import { wrapper } from 'store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ConsentModal } from 'components/make-a-post/consent';

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

const CreatePage = () => {
  const router = useRouter();
  const create = router.query.create as string;

  return (
    <Layout title="Create post">
      <ConsentModal></ConsentModal>
      <SavePost create={create} />
    </Layout>
  );
};

export default CreatePage;
