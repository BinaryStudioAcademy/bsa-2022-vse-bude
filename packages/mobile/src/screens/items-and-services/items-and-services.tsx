import React from 'react';
import {
  ScreenWrapper,
  Product,
  FlatList,
  StatusBar,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { useAppSelector, useCustomTheme } from '~/hooks/hooks';
import { selectProducts } from '~/store/selectors';
import { styles } from './styles';
import { ListHeader } from './components/components';

const ItemsAndServices = () => {
  const { colors } = useCustomTheme();
  const products = useAppSelector(selectProducts);

  return (
    <ScreenWrapper>
      <StatusBar
        backgroundColor={colors.backgroundSecondary}
        barStyle="dark-content"
      />
      <ListHeader contentContainerStyles={globalStyles.px4} />
      <FlatList
        style={globalStyles.px4}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Product
            contentContainerStyle={[styles.productWrapper, globalStyles.mt4]}
            productId={item.id}
          />
        )}
      />
    </ScreenWrapper>
  );
};

export { ItemsAndServices };
