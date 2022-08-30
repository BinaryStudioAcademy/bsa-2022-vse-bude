import React, { FC } from 'react';
import {
  ScreenWrapper,
  View,
  Text,
  EyeIcon,
  ScrollView,
} from '~/components/components';
import { useCustomTheme } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { Description } from './components/description/description';
import { Header } from './components/header/header';
import { ImageCarousel } from './components/image-carousel/image-carousel';
import { LotPriceBlock } from './components/price-block/lot-price-block';
import { ProductPriceBlock } from './components/price-block/product-price-block';

const ItemInfo: FC = () => {
  const { colors } = useCustomTheme();
  const lot = true;

  const handleBackPress = () => {
    return;
  };

  return (
    <ScreenWrapper>
      <Header onBackPress={handleBackPress} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[globalStyles.px5]}
      >
        <Text
          style={[
            globalStyles.fs36,
            globalStyles.fontWeightExtraBold,
            globalStyles.py6,
            { color: colors.text },
          ]}
        >
          Puff VILDSUND 52x41, gray, “Jysk”
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
            834
          </Text>
        </View>
        <ImageCarousel />
        <Description />
      </ScrollView>
      {lot ? <LotPriceBlock /> : <ProductPriceBlock />}
    </ScreenWrapper>
  );
};

export { ItemInfo };
