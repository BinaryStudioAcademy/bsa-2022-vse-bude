import { Layout, Item } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AuthHelper, CookieStorage } from '@helpers';
import {
  getProductByIdSSR,
  getProductsSSR,
  incrementProductViews,
} from 'services/product';
import { LotSection } from 'components/home/lot-section';
import { Routes } from '@enums';
import { Breadcrumbs } from '@primitives';
import { useTranslation } from 'next-i18next';
import type { ItemDto } from '@vse-bude/shared';
import { Http } from '@vse-bude/shared';
import { withPublic } from '@hocs';
import { useEffect } from 'react';
import { useAppDispatch } from '@hooks';
import { auctionPermissions } from '../../store/product-auction';

export const getServerSideProps = withPublic(async (ctx) => {
  const { locale } = ctx;

  const id = ctx.query.id as string;
  const storage = new CookieStorage(ctx);
  const auth = new AuthHelper(storage);
  const httpSSR = new Http(process.env.NEXT_PUBLIC_API_ROUTE, auth);

  try {
    const item = await getProductByIdSSR(httpSSR, id);
    const similarItems = await getProductsSSR({
      httpSSR,
      limit: 10,
    });

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common', 'item'])),
        item,
        similarItems,
      },
    };
  } catch {
    return {
      redirect: {
        destination: Routes.NOT_FOUND,
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

  const dispatch = useAppDispatch();

  useEffect(() => {
    incrementProductViews(item.id);
    dispatch(
      auctionPermissions({
        productId: item.id,
      }),
    );
  }, [item.id, dispatch]);

  return (
    <Layout title={item.title}>
      <Breadcrumbs
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
            name: item.category.title, //change
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
