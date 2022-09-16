import React from 'react';
import { useAppSelector, useCustomTheme } from '~/hooks/hooks';
import {
  ScreenWrapper,
  Product,
  FlatList,
  StatusBar,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { selectProducts } from '~/store/selectors';
import { styles } from './styles';
import { ListHeader } from './components/components';

const ItemsAndServices = () => {
  const { items } = useAppSelector(selectProducts);
  const { colors } = useCustomTheme();

  return (
    <ScreenWrapper>
      <StatusBar
        backgroundColor={colors.backgroundSecondary}
        barStyle="dark-content"
        translucent={false}
      />
      <FlatList
        ListHeaderComponent={ListHeader}
        style={globalStyles.px4}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Product
            contentContainerStyle={[styles.productWrapper, globalStyles.mt4]}
            product={item}
          />
        )}
      />
    </ScreenWrapper>
  );
};

export { ItemsAndServices };
