import React, { FC, useEffect } from 'react';
import { RouteProp } from '@react-navigation/native';
import { RootNavigationParamList } from '~/common/types/types';
import {
  ProductType,
  UpdateProductPriceEvent,
  UPDATE_PRODUCT_PRICE,
} from '@vse-bude/shared';
import { products as productsActions } from '~/store/actions';
import { selectProduct } from '~/store/products/selectors';
import {
  useAppDispatch,
  useAppSelector,
  useCustomTheme,
  useRoute,
  useTranslation,
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
import { selectCurrentUser } from '~/store/selectors';
import { notification, socketApi } from '~/services/services';
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
  const product = useAppSelector(selectProduct);
  const user = useAppSelector(selectCurrentUser);
  const route =
    useRoute<
      RouteProp<Pick<RootNavigationParamList, RootScreenName.ITEM_INFO>>
    >();
  const id = route.params?.itemId;

  useEffect(() => {
    dispatch(productsActions.loadProductInfo(id));

    const socket = socketApi.getAuctionItemIo(id);
    socket.on(UPDATE_PRODUCT_PRICE, (data: UpdateProductPriceEvent) => {
      dispatch(productsActions.updateCurrentItemPrice(data));
      if (data.bidderId !== user?.id || !user) {
        notification.info(t('screens:product_info.NEW_BID'));
      }
    });

    if (user) {
      dispatch(productsActions.auctionPermissions(id));
    }
  }, [id, user, dispatch]);

  if (!product) {
    return <Spinner />;
  }
  const {
    title,
    currentPrice,
    price,
    minimalBid,
    type,
    imageLinks,
    views,
    author,
  } = product;
  const isAuction = type == ProductType.AUCTION;

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
          id={id}
          currentPrice={currentPrice}
          minimalBid={minimalBid}
        />
      ) : (
        <ProductPriceBlock price={price} />
      )}
    </ScreenWrapper>
  );
};

export { ProductInfo };
