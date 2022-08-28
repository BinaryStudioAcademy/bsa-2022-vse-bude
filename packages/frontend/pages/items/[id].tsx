import { Layout } from '@components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Item } from '@components';
import { withPublic } from '@helpers';
import { getProductById, getProducts } from 'services/product';
import { LotSection } from 'components/home/lot-section';
import { Routes } from '@enums';
import { PagePath } from '@primitives';
import { useTranslation } from 'next-i18next';
import type { ItemDto } from '@vse-bude/shared';

export const getServerSideProps = withPublic(async (ctx) => {
  const { locale } = ctx;

  const id = ctx.query.id as string;

  try {
    const item = await getProductById(id);
    console.log();

    const similarItems = await getProducts({ limit: 10 });

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common', 'item'])),
        item,
        similarItems,
      },
    };
  } catch (e) {
    console.log('Error');

    return {
      redirect: {
        destination: Routes.DEFAULT,
      },
    };
  }
});

interface ItemPageProps {
  item: ItemDto;
  similarItems: ItemDto[];
}

const ItemPage = ({ item, similarItems }: ItemPageProps) => {
  const { t } = useTranslation();

  return (
    <Layout title={item.title}>
      <PagePath
        paths={[
          {
            name: t('common:header.nav.home'),
            route: Routes.DEFAULT,
          },
          {
            name: t('common:header.nav.category'),
            route: Routes.DEFAULT, // change
          },
          {
            name: t(`common:categories.${item.category.title}`),
            route: Routes.DEFAULT, // change
          },
        ]}
      />
      <Item item={item} />
      <LotSection
        title={t('item:similarItems')}
        lots={similarItems}
        loadMoreTitle={t('item:seeMoreItems')}
      />
    </Layout>
  );
};

export default ItemPage;
