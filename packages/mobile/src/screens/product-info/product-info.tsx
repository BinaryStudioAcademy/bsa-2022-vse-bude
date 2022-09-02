import React, { FC, useEffect } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { RootNavigationParamList } from '~/common/types/types';
import {
  ScreenWrapper,
  View,
  Text,
  EyeIcon,
  ScrollView,
} from '~/components/components';
import { useCustomTheme, useNavigation } from '~/hooks/hooks';
import { ProductType } from '@vse-bude/shared';
import { globalStyles } from '~/styles/styles';
import { MOCK_PRODUCT } from '~/mock/mock-product-info';
import { Description } from './components/description/description';
import { ImageCarousel } from './components/image-carousel/image-carousel';
import { LotPriceBlock } from './components/price-block/lot-price-block';
import { ProductPriceBlock } from './components/price-block/product-price-block';
import { SellerInfo } from './components/seller-info/seller-info';

const ProductInfo: FC = () => {
  const { colors } = useCustomTheme();
  const navigation = useNavigation<NavigationProp<RootNavigationParamList>>();

  const {
    title,
    description,
    price,
    minimalBid,
    city,
    type,
    status,
    endDate,
    imageLinks,
    views,
    currentPrice,
  } = MOCK_PRODUCT;

  useEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: 'none' },
    });
  }, []);

  return (
    <ScreenWrapper>
      {/** TODO: add countdown for auction item component */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[globalStyles.px5, globalStyles.mb5]}
      >
        <Text
          style={[
            globalStyles.fs36,
            globalStyles.fontWeightExtraBold,
            globalStyles.py6,
            { color: colors.text },
          ]}
        >
          {title || ''}
        </Text>
        <View
          style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}
        >
          <EyeIcon size={15} color={colors.icon} />
          <Text
            style={[
              globalStyles.px3,
              globalStyles.fs12,
              { color: colors.icon },
            ]}
          >
            {views?.toString() || ''}
          </Text>
        </View>
        {imageLinks && <ImageCarousel imageLinks={imageLinks} />}
        <Description
          description={description}
          city={city}
          status={status}
          endDate={endDate}
        />
        <SellerInfo />
      </ScrollView>
      {type == ProductType.SELLING ? (
        <LotPriceBlock
          currentPrice={Number(currentPrice)}
          minimalBid={Number(minimalBid)}
        />
      ) : (
        <ProductPriceBlock price={Number(price)} />
      )}
    </ScreenWrapper>
  );
};

export { ProductInfo };
