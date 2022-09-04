import React, { FC, useEffect } from 'react';
import { ListRenderItem } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { selectProducts } from '~/store/products/selectors';
import { RootScreenName } from '~/common/enums/enums';
import { RootNavigationParamList } from '~/common/types/types';
import { useAppDispatch, useAppSelector } from '~/hooks/hooks';
import {
  Text,
  ScreenWrapper,
  FlatList,
  TouchableOpacity,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { loadAllProducts } from '~/store/products/actions';
import { ProductDto } from '@vse-bude/shared';

const Favorite: FC = () => {
  const navigation = useNavigation<NavigationProp<RootNavigationParamList>>();
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(loadAllProducts());
  }, []);

  const renderItem: ListRenderItem<ProductDto> = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(RootScreenName.PRODUCT_INFO, { id: item.id })
      }
    >
      <Text style={globalStyles.mt4}>{item.title || ''}</Text>
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper>
      <Text>Favorite screen</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
      />
    </ScreenWrapper>
  );
};

export { Favorite };
