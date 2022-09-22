import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { useAppDispatch, useAppSelector, useMemo } from '~/hooks/hooks';
import { lotTypeFilterData } from '~/mock/mock';
import { filters as filtersApi } from '~/store/actions';
import { selectFilters } from '~/store/selectors';
import { ProductType } from '@vse-bude/shared';
import { ProductTypeSelector } from '../components';

type Props = {
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const ProductTypeSection: FC<Props> = ({ contentContainerStyle }) => {
  const { type } = useAppSelector(selectFilters);
  const dispatch = useAppDispatch();

  const onPress = (filterName: ProductType | undefined) => {
    dispatch(filtersApi.setLotType(filterName));
  };

  const renderedItems = useMemo(() => {
    return lotTypeFilterData.map(({ title, name }) => {
      const isSelected = type === name;

      return (
        <ProductTypeSelector
          title={title}
          key={name}
          isSelected={isSelected}
          onPress={() => onPress(name)}
        />
      );
    });
  }, [type]);

  return (
    <View style={[globalStyles.flexDirectionRow, contentContainerStyle]}>
      {renderedItems}
    </View>
  );
};

export { ProductTypeSection };
