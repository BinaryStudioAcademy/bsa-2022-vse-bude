import React from 'react';
import {
  useAppSelector,
  useCustomTheme,
  useEffect,
  useAppDispatch,
  useCallback,
} from '~/hooks/hooks';
import {
  ScreenWrapper,
  Product,
  FlatList,
  StatusBar,
  Spinner,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import {
  selectProducts,
  selectFilters,
  productsDataStatus,
} from '~/store/selectors';
import { products as productActions } from '~/store/actions';
import { removeObjectFalsyFields } from '~/helpers/helpers';
import { RootState } from '~/common/types/types';
import { ProductQuery, ProductDto } from '@vse-bude/shared';
import { DataStatus } from '~/common/enums/enums';
import { styles } from './styles';
import { ListHeader } from './components/components';

const ItemsAndServices = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  const dataStatus = useAppSelector(productsDataStatus);
  const { items } = useAppSelector(selectProducts);
  const { colors } = useCustomTheme();
  useEffect(() => {
    dispatch(
      productActions.loadProducts(
        removeObjectFalsyFields<RootState['filters'], ProductQuery>(filters),
      ),
    );
  }, [filters]);
  const isLoading = dataStatus === DataStatus.PENDING;
  const renderItem = useCallback(
    ({ item }: { item: ProductDto }) => (
      <Product
        contentContainerStyle={[styles.productWrapper, globalStyles.mt4]}
        product={item}
      />
    ),
    [],
  );
  const keyExtractor = useCallback((item: ProductDto) => item.id, []);

  return (
    <ScreenWrapper>
      <StatusBar
        backgroundColor={colors.backgroundSecondary}
        barStyle="dark-content"
        translucent={false}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <FlatList
          ListHeaderComponent={ListHeader}
          style={globalStyles.px4}
          data={items}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      )}
    </ScreenWrapper>
  );
};

export { ItemsAndServices };
