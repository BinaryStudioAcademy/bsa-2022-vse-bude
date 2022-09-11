import React, { FC, useEffect } from 'react';
import { RouteProp } from '@react-navigation/native';
import { RootNavigationParamList } from '~/common/types/types';
import { ProductType } from '@vse-bude/shared';
import {
  product as productActions,
  products as productsActions,
} from '~/store/actions';
import { selectCurrentUser } from '~/store/selectors';
import { selectProduct } from '~/store/product/selectors';
import {
  useAppDispatch,
  useAppSelector,
  useCustomTheme,
  useRoute,
} from '~/hooks/hooks';
import { RootScreenName } from '~/common/enums/enums';
import {
  ScreenWrapper,
  View,
  Text,
  EyeIcon,
  ScrollView,
  Spinner,
  Countdown,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { notification, productApi } from '~/services/services';
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
  const product = useAppSelector(selectProduct);
  const user = useAppSelector(selectCurrentUser);
  const route =
    useRoute<
      RouteProp<Pick<RootNavigationParamList, RootScreenName.ITEM_INFO>>
    >();
  const id = route.params?.itemId;

  useEffect(() => {
    dispatch(productActions.loadProductInfo(id));
    if (user) {
      dispatch(productsActions.fetchFavoritesIds());
    }
  }, [dispatch]);

  if (!product) {
    return <Spinner />;
  }
  const { title, type, imageLinks, views, author } = product;
  const isAuction = type == ProductType.AUCTION;

  const handleToggleFavorite = async (
    productId: string,
    favoritesIds: string[],
  ) => {
    if (!user) {
      return notification.info('You should authorize first');
    }
    try {
      if (favoritesIds.length) {
        const isFavorite = favoritesIds.includes(productId);
        if (isFavorite) {
          return await productApi.deleteFromFavorites({ productId });
        }

        return await productApi.uploadToFavorites({ productId });
      }

      return await productApi.uploadToFavorites({ productId });
    } catch {
      (err: Record<string, unknown>) =>
        notification.error(JSON.stringify(err.message));
    }
  };

  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[globalStyles.px5, globalStyles.mb5]}
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
          onFavoritePress={handleToggleFavorite}
        />
      ) : (
        <ProductPriceBlock
          product={product}
          onFavoritePress={handleToggleFavorite}
        />
      )}
    </ScreenWrapper>
  );
};

export { ProductInfo };
