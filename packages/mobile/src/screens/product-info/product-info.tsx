import React, { FC, useEffect } from 'react';
import { RouteProp } from '@react-navigation/native';
import { RootNavigationParamList } from '~/common/types/types';
import { ProductType } from '@vse-bude/shared';
import { product as productActions } from '~/store/actions';
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
  const route =
    useRoute<
      RouteProp<Pick<RootNavigationParamList, RootScreenName.ITEM_INFO>>
    >();
  const id = route.params?.itemId;

  useEffect(() => {
    dispatch(productActions.loadProductInfo(id));
    dispatch(productActions.updateProductViews(id));
  }, []);

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
        <LotPriceBlock currentPrice={currentPrice} minimalBid={minimalBid} />
      ) : (
        <ProductPriceBlock price={price} />
      )}
    </ScreenWrapper>
  );
};

export { ProductInfo };
