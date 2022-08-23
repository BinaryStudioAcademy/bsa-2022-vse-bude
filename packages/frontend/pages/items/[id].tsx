import { Layout } from '@components';
import { useRouter } from 'next/router';
import { wrapper } from 'store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Item } from '@components';

export const getServerSideProps = wrapper.getServerSideProps(
  (_store) =>
    async ({ locale }) => ({
      props: {
        ...(await serverSideTranslations(locale, ['common', 'footer'])),
      },
    }),
);

const ItemPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <Layout title="Item name">
      <Item id={id}></Item>
    </Layout>
  );
};

export default ItemPage;
