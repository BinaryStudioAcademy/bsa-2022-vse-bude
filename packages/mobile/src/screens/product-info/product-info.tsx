import { NavigationProp } from '@react-navigation/native';
import React, { FC, useEffect } from 'react';
import { RootScreenName } from '~/common/enums/enums';
import { RootNavigationParamList } from '~/common/types/types';
import {
  ScreenWrapper,
  View,
  Text,
  EyeIcon,
  ScrollView,
} from '~/components/components';
import { useCustomTheme, useNavigation } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { Description } from './components/description/description';
import { Header } from './components/header/header';
import { ImageCarousel } from './components/image-carousel/image-carousel';
import { LotPriceBlock } from './components/price-block/lot-price-block';
import { ProductPriceBlock } from './components/price-block/product-price-block';

const ProductInfo: FC = () => {
  const { colors } = useCustomTheme();
  const navigation = useNavigation<NavigationProp<RootNavigationParamList>>();
  const itemTypeLot = true;

  const handleBackPress = () => {
    navigation.navigate(RootScreenName.MAIN);
  };

  useEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: 'none' },
    });
  }, []);

  return (
    <ScreenWrapper>
      <Header onBackPress={handleBackPress} />
      {/** TODO: add countdown for auction item component */}
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
        {/** TODO: add seller info component */}
      </ScrollView>
      {itemTypeLot ? <LotPriceBlock /> : <ProductPriceBlock />}
    </ScreenWrapper>
  );
};

export { ProductInfo };
