import React from 'react';
import {
  View,
  ScreenWrapper,
  Product,
  FlatList,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { useAppSelector, useCustomTheme, useMemo } from '~/hooks/hooks';
import { selectProducts } from '~/store/selectors';
import { filters } from '~/mock/filters';
import { Filter } from './components/components';
import { createStyles } from './styles';

const ItemsAndServices = () => {
  const { dark, colors } = useCustomTheme();
  const styles = useMemo(() => createStyles(colors), [dark, colors]);
  const products = useAppSelector(selectProducts);

  return (
    <ScreenWrapper statusBarProps={styles.statusBar}>
      <View style={globalStyles.px4}>
        <View
          style={[
            globalStyles.flexDirectionRow,
            globalStyles.py3,
            styles.filterWrapper,
          ]}
        >
          {filters.map((item) => {
            return (
              <Filter
                key={item.id}
                onFilterClose={() => {
                  //TODO
                }}
                title={item.title}
                contentContainerStyle={styles.filterContainer}
              />
            );
          })}
        </View>
      </View>
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
