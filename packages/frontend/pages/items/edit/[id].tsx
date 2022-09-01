import { Layout } from '@components/layout';
import { SavePost } from '@components/save-post';
import { wrapper } from 'store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

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

const EditPage = () => {
  const router = useRouter();
  const create = router.query.create as string;

  return (
    <Layout title="Edit post">
      <SavePost edit create={create} />
    </Layout>
  );
};

export default EditPage;
