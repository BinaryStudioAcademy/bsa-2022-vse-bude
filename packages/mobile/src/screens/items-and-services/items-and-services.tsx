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
import { ProductQuery } from '@vse-bude/shared';
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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Product
              contentContainerStyle={[styles.productWrapper, globalStyles.mt4]}
              product={item}
            />
          )}
        />
      )}
    </ScreenWrapper>
  );
};

export { ItemsAndServices };
