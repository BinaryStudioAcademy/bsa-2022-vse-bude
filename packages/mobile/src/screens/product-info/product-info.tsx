import React, { FC, useEffect, useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { ProductType } from '@vse-bude/shared';
import { RootNavigationParamList } from '~/common/types/types';
import { RootScreenName } from '~/common/enums/enums';
import {
  products as productsActions,
  product as productActions,
} from '~/store/actions';
import {
  selectProduct,
  selectCurrentUser,
  selectFavoriteIds,
} from '~/store/selectors';
import { notification } from '~/services/services';
import {
  useAppDispatch,
  useAppSelector,
  useCustomTheme,
  useRoute,
} from '~/hooks/hooks';
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
import {
  Description,
  ImageCarousel,
  LotPriceBlock,
  ProductPriceBlock,
  SellerInfo,
} from './components/components';

const ProductInfo: FC = () => {
  const { colors } = useCustomTheme();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectProduct);
  const user = useAppSelector(selectCurrentUser);
  const favoriteIds = useAppSelector(selectFavoriteIds);
  const route =
    useRoute<
      RouteProp<Pick<RootNavigationParamList, RootScreenName.ITEM_INFO>>
    >();
  const id = route.params?.itemId;
  const isFavorite = favoriteIds.includes(id);

  useEffect(() => {
    dispatch(productActions.loadProductInfo(id));
    dispatch(productActions.updateProductViews(id));
    if (user) {
      if (favoriteIds) {
        favoriteIds.map((id) => dispatch(productsActions.addToFavorite(id)));
        dispatch(productsActions.cleanFavoriteIds());
      }
      dispatch(productsActions.fetchFavoriteIds());
    }
  }, []);

  if (!product) {
    return <Spinner />;
  }
  const { title, type, imageLinks, views, author } = product;
  const isAuction = type == ProductType.AUCTION;

  const handleToggleFavorite = async (productId: string) => {
    setIsLoading(true);
    switch (Boolean(user)) {
      case true:
        if (isFavorite) {
          dispatch(productsActions.deleteFromFavorite(productId))
            .unwrap()
            .catch((err) => notification.error(JSON.stringify(err.message)))
            .finally(() => {
              dispatch(productsActions.fetchFavoriteIds());
              setIsLoading(false);
            });
          break;
        }
        dispatch(productsActions.addToFavorite(productId))
          .unwrap()
          .catch((err) => notification.error(JSON.stringify(err.message)))
          .finally(() => {
            dispatch(productsActions.fetchFavoriteIds());
            setIsLoading(false);
          });
        break;
      case false:
        if (isFavorite) {
          dispatch(productsActions.deleteFromFavoriteGuestUser(productId));
          setIsLoading(false);
          break;
        }
        dispatch(productsActions.addToFavoriteGuestUser(productId));
        setIsLoading(false);
        break;
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
          isLoading={isLoading}
          isFavorite={isFavorite}
          onFavoritePress={handleToggleFavorite}
        />
      ) : (
        <ProductPriceBlock
          product={product}
          isLoading={isLoading}
          isFavorite={isFavorite}
          onFavoritePress={handleToggleFavorite}
        />
      )}
    </ScreenWrapper>
  );
};

export { ProductInfo };
