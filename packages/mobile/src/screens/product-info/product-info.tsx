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
  const route = useRoute<RouteProp<RootNavigationParamList>>();
  const id = route.params?.itemId;

  useEffect(() => {
    if (id) {
      dispatch(productActions.loadProductInfo(id));
    }
  }, []);

  if (product) {
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
    const auction = type == ProductType.AUCTION;

    return (
      <ScreenWrapper>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[globalStyles.px5, globalStyles.mb5]}
        >
          {auction && <Countdown endDate={product.endDate} />}
          <Text
            style={[
              auction && globalStyles.mt6,
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
          <Description product={product} auction={auction} />
          <SellerInfo author={author} />
        </ScrollView>
        {auction ? (
          <LotPriceBlock currentPrice={currentPrice} minimalBid={minimalBid} />
        ) : (
          <ProductPriceBlock price={price} />
        )}
      </ScreenWrapper>
    );
  }

  return <Spinner />;
};

export { ProductInfo };
