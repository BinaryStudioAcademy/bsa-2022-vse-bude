import { Layout } from '@components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Item } from '@components';
import { withPublic } from '@helpers';
import { getProductById, getProducts } from 'services/product';
import { LotSection } from 'components/home/lot-section';
import { Routes } from '@enums';
import { PagePath } from '@primitives';
import type { ItemDto } from '@vse-bude/shared';

export const getServerSideProps = withPublic(async (ctx) => {
  const { locale } = ctx;

  const id = ctx.query.id as string;
  const item = await getProductById(id);
  const similarItems = await getProducts({ limit: 10 });

  if (Object.keys(item).length === 0) {
    return {
      redirect: {
        destination: Routes.DEFAULT,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      item,
      similarItems,
    },
  };
});

interface ItemPageProps {
  item: ItemDto;
  similarItems: ItemDto[];
}

const ItemPage = ({ item, similarItems }: ItemPageProps) => (
  <Layout title={item.title}>
    <PagePath
      paths={[
        {
          name: 'Home',
          route: Routes.DEFAULT,
        },
        {
          name: 'Categories',
          route: Routes.DEFAULT, // change
        },
        {
          name: 'Computer and laptops',
          route: Routes.DEFAULT, // change
        },
      ]}
    />
    <Item item={item} />
    <LotSection
      title="Similar lots"
      lots={similarItems}
      loadMoreTitle="See more"
    />
  </Layout>
);

export default ItemPage;
