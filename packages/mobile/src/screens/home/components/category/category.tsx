import React, { FC } from 'react';
import { Text, Image, TouchableOpacity } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { useAppSelector, useAppDispatch, useNavigation } from '~/hooks/hooks';
import { selectCategoryById } from '~/store/selectors';
import { RootNavigationProps } from '~/common/types/types';
import { filters as filtersActions } from '~/store/actions';
import { RootScreenName } from '~/common/enums/enums';
import { styles } from './styles';

type Props = {
  categoryId: string;
};

const Category: FC<Props> = ({ categoryId }) => {
  const { image, title, id } = useAppSelector((state) =>
    selectCategoryById(state, categoryId),
  );
  const dispatch = useAppDispatch();
  const navigation = useNavigation<RootNavigationProps>();
  const onPress = () => {
    dispatch(filtersActions.resetFilters());
    dispatch(filtersActions.setCategory(id));
    navigation.navigate(RootScreenName.PRODUCTS);
  };

  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        globalStyles.alignItemsCenter,
        globalStyles.justifyContentSpaceBetween,
        globalStyles.px2,
        globalStyles.py3,
        globalStyles.mr3,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.title, globalStyles.fs14]} numberOfLines={3}>
        {title}
      </Text>
      <Image style={styles.image} source={{ uri: image }} />
    </TouchableOpacity>
  );
};

export { Category };
