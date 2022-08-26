import { Layout } from '@components';
import { wrapper } from 'store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Item } from '@components';
import { incrementProductViews } from 'services/product';
import { useEffect, useState } from 'react';

interface ItemProps {
  id: string;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (_store) => async (ctx) => {
    const { locale, query } = ctx;

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common', 'footer'])),
        id: query.id,
      },
    };
  },
);

const ItemPage = ({ id }: ItemProps) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    incrementProductViews(id).then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    item && (
      <Layout title="Item name">
        <pre>{JSON.stringify({ views: item?.views })}</pre>
        <Item id={id}></Item>
      </Layout>
    )
  );
};

export default ItemPage;
