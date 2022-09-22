import React, { FC } from 'react';
import {
  ScreenWrapper,
  StatusBar,
  Divider,
  View,
  ScrollView,
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
      <StatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor={colors.backgroundSecondary}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: colors.backgroundSecondary }}
      >
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
