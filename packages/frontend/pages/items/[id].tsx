import { useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { LotSection } from '@components/home/lot-section';
import { Routes } from '@enums';
import { Breadcrumbs } from '@primitives';
import { useTranslation } from 'next-i18next';
import { Http } from '@vse-bude/shared';
import { withPublic } from '@hocs';
import { Layout } from '@components/layout';
import { Item } from '@components/item';
import { useAppDispatch, useTypedSelector } from '@hooks';
import {
  auctionPermissions,
  fetchProductSSR,
  updateProductViews,
  fetchSimilarProducts,
} from 'store/product';
import { wrapper } from '@store';
import { shallowEqual } from 'react-redux';

export const getServerSideProps = withPublic(
  wrapper.getServerSideProps((store) => async (ctx) => {
    const { locale, query } = ctx;
    const http = new Http(process.env.NEXT_PUBLIC_API_ROUTE);
    const id = query.id as string;

    const { payload } = await store.dispatch(fetchProductSSR({ id, http }));

    if (!payload) {
      return {
        redirect: {
          destination: Routes.NOT_FOUND,
        },
        props: {},
      };
    }

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common', 'item'])),
      },
    };
  }),
);

const ItemPage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const item = useTypedSelector(
    (state) => state.product.currentItem,
    shallowEqual,
  );

  const similarProducts = useTypedSelector(
    (state) => state.product.similarProducts,
    shallowEqual,
  );

  useEffect(() => {
    dispatch(updateProductViews(item.id));
    dispatch(
      auctionPermissions({
        productId: item.id,
      }),
    );
    dispatch(fetchSimilarProducts(item.id));
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
            name: t('common:header.nav.item'),
            route: Routes.ITEMS,
          },
          {
            name: item.category.title,
            route:
              Routes.ITEMS +
              `?filter=%7B%22category%22%3A%22${item.category.id}7%22%7D`, // change
          },
        ]}
      />
      <Item item={item} />
      <LotSection
        title={t('item:similarItems')}
        lots={similarProducts}
        loadMoreTitle={t('item:seeMoreItems')}
      />
    </Layout>
  );
};

export default ItemPage;
