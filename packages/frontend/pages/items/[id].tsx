import { Layout } from '@components';
import { wrapper } from 'store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Item } from '@components';
import { incrementProductViews } from 'services/product';

interface ItemProps {
  id: string;
  item: { views: number };
}

export const getServerSideProps = wrapper.getServerSideProps(
  (_store) => async (ctx) => {
    const { locale, query } = ctx;

    let itemWithIncrementedViewCounter = {};

    try {
      itemWithIncrementedViewCounter = await incrementProductViews(
        query.id as string,
      );
    } catch (e) {
      console.log(e);
    }

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common', 'footer'])),
        item: itemWithIncrementedViewCounter,
        id: query.id,
      },
    };
  },
);

const ItemPage = ({ id, item }: ItemProps) => (
  <Layout title="Item name">
    <pre
      style={{
        overflow: 'auto',
      }}
    >
      {JSON.stringify({ views: item?.views })}
    </pre>
    <Item id={id}></Item>
  </Layout>
);

export default ItemPage;
