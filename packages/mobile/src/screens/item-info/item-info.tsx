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
import { Images } from './components/images/images';
import { LotPriceBlock } from './components/price-block/lot-price-block';
import { ProductPriceBlock } from './components/price-block/product-price-block';

const ItemInfo: FC = () => {
  const { colors } = useCustomTheme();
  const lot = true;

  const handleBurgerPress = () => {
    return;
  };
  const handleBackPress = () => {
    return;
  };

  return (
    <ScreenWrapper>
      <Header onBurgerPress={handleBurgerPress} onBackPress={handleBackPress} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[globalStyles.px5, globalStyles.mt6]}
      >
        <Text
          style={[
            globalStyles.fs36,
            globalStyles.fontWeightExtraBold,
            { color: colors.text },
          ]}
        >
          Puff VILDSUND 52x41, gray, “Jysk”
        </Text>
        <View
          style={[
            globalStyles.flexDirectionRow,
            globalStyles.alignItemsCenter,
            globalStyles.mt5,
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
            834
          </Text>
        </View>
        <Images />
        <Description />
      </ScrollView>
      {lot ? <LotPriceBlock /> : <ProductPriceBlock />}
    </ScreenWrapper>
  );
};

export { ItemInfo };
