import React, { FC } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {
  ScreenWrapper,
  StatusBar,
  Divider,
  View,
} from '~/components/components';
import { useCustomTheme } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import {
  ProductTypeSection,
  CategorySection,
  PriceRangeSection,
  SortBySection,
} from './components/components';

const Filter: FC = () => {
  const { colors } = useCustomTheme();

  return (
    <ScreenWrapper>
      <StatusBar backgroundColor={colors.backgroundSecondary} />

      <ScrollView style={{ backgroundColor: colors.backgroundSecondary }}>
        <View style={[globalStyles.py6, globalStyles.px5]}>
          <ProductTypeSection />
          <Divider contentContainerStyle={globalStyles.mt5} />
          <CategorySection />
          <Divider contentContainerStyle={globalStyles.mt5} />
          <PriceRangeSection />
          <SortBySection />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export { Filter };
