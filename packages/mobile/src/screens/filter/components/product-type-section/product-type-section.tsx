import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { useAppDispatch, useAppSelector } from '~/hooks/hooks';
import { lotTypeFilterData } from '~/mock/mock';
import { FilterLotType } from '~/common/enums/enums';
import { filters as filtersApi } from '~/store/actions';
import { selectFilters } from '~/store/selectors';
import { ProductTypeSelector } from '../components';

type Props = {
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const ProductTypeSection: FC<Props> = ({ contentContainerStyle }) => {
  const { type } = useAppSelector(selectFilters);
  const dispatch = useAppDispatch();

  const onPress = (filterName: FilterLotType) => {
    dispatch(filtersApi.setLotType(filterName));
  };

  return (
    <View style={[globalStyles.flexDirectionRow, contentContainerStyle]}>
      {lotTypeFilterData.map(({ title, name }) => {
        const isSelected = type === name;

        return (
          <ProductTypeSelector
            title={title}
            key={name}
            isSelected={isSelected}
            onPress={() => onPress(name)}
          />
        );
      })}
    </View>
  );
};

export { ProductTypeSection };
