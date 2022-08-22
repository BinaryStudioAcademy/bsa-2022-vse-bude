import { Layout } from '@components';
import { useRouter } from 'next/router';
import { wrapper } from 'store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps = wrapper.getServerSideProps(
  (_store) =>
    async ({ locale }) => ({
      props: {
        ...(await serverSideTranslations(locale, ['common', 'footer'])),
      },
    }),
);

const Item = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout title="Item name">
      <div>Item id: {id}</div>
    </Layout>
  );
};

export default Item;
