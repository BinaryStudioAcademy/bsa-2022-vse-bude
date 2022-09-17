import React from 'react';
import {
  ScreenWrapper,
  Product,
  FlatList,
  StatusBar,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import {
  useAppSelector,
  useAppDispatch,
  useCustomTheme,
  useEffect,
} from '~/hooks/hooks';
import { selectProducts } from '~/store/selectors';
import { products } from '~/store/actions';
import { styles } from './styles';
import { ListHeader } from './components/components';

const ItemsAndServices = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(products.loadProducts({ limit: 20 }));
  }, []);
  const { colors } = useCustomTheme();
  const { items } = useAppSelector(selectProducts);

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
