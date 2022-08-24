import { Layout } from '@components';
import { useRouter } from 'next/router';
import { wrapper } from 'store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Post } from '@components';
import { ConsentPage } from 'components/consent';

export const getServerSideProps = wrapper.getServerSideProps(
  (_store) =>
    async ({ locale }) => ({
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
    }),
);

const CreatePage = () => {
  const router = useRouter();
  const create = router.query.create as string;

  return (
    <Layout title="Create post">
      <ConsentPage><b>Our terms of service</b></ConsentPage>
      <Post create={create} />
    </Layout>
  );
};

export default CreatePage;
