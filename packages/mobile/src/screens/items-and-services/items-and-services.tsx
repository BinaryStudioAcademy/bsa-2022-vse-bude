import React from 'react';
import {
  useAppSelector,
  useCustomTheme,
  useEffect,
  useAppDispatch,
} from '~/hooks/hooks';
import {
  ScreenWrapper,
  Product,
  FlatList,
  StatusBar,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { selectProducts, selectFilters } from '~/store/selectors';
import { products as productActions } from '~/store/actions';
import { removeObjectFalsyFields } from '~/helpers/helpers';
import { RootState } from '~/common/types/types';
import { ProductQuery } from '@vse-bude/shared';
import { styles } from './styles';
import { ListHeader } from './components/components';

const ItemsAndServices = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  const { items } = useAppSelector(selectProducts);
  const { colors } = useCustomTheme();
  useEffect(() => {
    dispatch(
      productActions.loadProducts(
        removeObjectFalsyFields<RootState['filters'], ProductQuery>(filters),
      ),
    );
  }, []);

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
