import React, { FC, useEffect, useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { RootNavigationParamList } from '~/common/types/types';
import { DataStatus, RootScreenName } from '~/common/enums/enums';
import {
  ProductType,
  UpdateProductPriceEvent,
  UPDATE_PRODUCT_PRICE,
} from '@vse-bude/shared';
import { products as productsActions } from '~/store/actions';
import {
  selectCurrentUser,
  selectFavoriteIds,
  selectCurrentProduct,
  selectProductsDataStatus,
} from '~/store/selectors';
import { notification, socketApi } from '~/services/services';
import {
  useAppDispatch,
  useAppSelector,
  useCustomTheme,
  useRoute,
  useTranslation,
} from '~/hooks/hooks';
import {
  ScreenWrapper,
  View,
  Text,
  EyeIcon,
  ScrollView,
  Spinner,
  Countdown,
  StatusBar,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import {
  Description,
  ImageCarousel,
  LotPriceBlock,
  ProductPriceBlock,
  SellerInfo,
} from './components/components';

const ProductInfo: FC = () => {
  const { colors } = useCustomTheme();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const product = useAppSelector(selectCurrentProduct);
  const dataStatusProduct = useAppSelector(selectProductsDataStatus);
  const isLoading = dataStatusProduct === DataStatus.PENDING;
  const user = useAppSelector(selectCurrentUser);
  const favoriteIds = useAppSelector(selectFavoriteIds);
  const route =
    useRoute<
      RouteProp<Pick<RootNavigationParamList, RootScreenName.ITEM_INFO>>
    >();
  const id = route.params?.itemId;
  const isFavorite = favoriteIds.includes(id);
  const [makeFavoritePending, setMakeFavoritePending] = useState(false);

  useEffect(() => {
    dispatch(productsActions.loadProductInfo(id));
    dispatch(productsActions.updateProductViews(id));

    const socket = socketApi.getAuctionItemIo(id);
    socket.on(UPDATE_PRODUCT_PRICE, (data: UpdateProductPriceEvent) => {
      dispatch(productsActions.updateCurrentItemPrice(data));
      if (data.bidderId !== user?.id || !user) {
        notification.info(t('screens:product_info.NEW_BID'));
      }
    });

    if (user) {
      dispatch(productsActions.auctionPermissions(id));
      dispatch(productsActions.fetchFavoriteIds());
    }
  }, [id, user, dispatch]);

  if (!product || isLoading) {
    return <Spinner isOverflow={true} />;
  }
  const { title, type, imageLinks, views, author } = product;
  const isAuction = type == ProductType.AUCTION;

  const handleToggleFavorite = async (productId: string) => {
    setMakeFavoritePending(true);
    if (isFavorite) {
      return await dispatch(productsActions.deleteFromFavorite(productId))
        .unwrap()
        .finally(() => setMakeFavoritePending(false));
    }

    return await dispatch(productsActions.addToFavorite(productId))
      .unwrap()
      .finally(() => setMakeFavoritePending(false));
  };

  return (
    <ScreenWrapper>
      <StatusBar
        backgroundColor={colors.backgroundSecondary}
        translucent={false}
        barStyle="dark-content"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[globalStyles.px5, globalStyles.py6, globalStyles.mb6]}
      >
        {isAuction && <Countdown endDate={product.endDate} />}
        <Text
          style={[
            isAuction && globalStyles.mt6,
            globalStyles.fs36,
            globalStyles.fontWeightExtraBold,
            { color: colors.text },
          ]}
        >
          {title}
        </Text>
        <View
          style={[
            globalStyles.flexDirectionRow,
            globalStyles.alignItemsCenter,
            globalStyles.mt2,
          ]}
        >
          <EyeIcon size={15} color={colors.icon} />
          <Text
            style={[
              globalStyles.px3,
              globalStyles.fs12,
              { color: colors.icon },
            ]}
          >
            {views}
          </Text>
        </View>
        {imageLinks && <ImageCarousel imageLinks={imageLinks} />}
        <Description product={product} />
        <SellerInfo author={author} />
      </ScrollView>
      {isAuction ? (
        <LotPriceBlock
          product={product}
          isFavorite={isFavorite}
          makeFavoritePending={makeFavoritePending}
          onFavoritePress={handleToggleFavorite}
        />
      ) : (
        <ProductPriceBlock
          product={product}
          isFavorite={isFavorite}
          makeFavoritePending={makeFavoritePending}
          onFavoritePress={handleToggleFavorite}
        />
      )}
    </ScreenWrapper>
  );
};

export { ProductInfo };
