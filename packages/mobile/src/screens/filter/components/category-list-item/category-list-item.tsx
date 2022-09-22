import Color from 'color';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { shallowEqual } from 'react-redux';
import { ColorPalette } from '@vse-bude/shared';

import { CheckBox, Pressable, Text } from '~/components/components';
import { useAppSelector } from '~/hooks/hooks';
import { selectCategoryById } from '~/store/selectors';
import { globalStyles } from '~/styles/styles';

type CategoryListItemProps = {
  categoryId: string;
  selected: boolean;
  onSelect: (id: string) => void;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const CategoryListItem: React.FC<CategoryListItemProps> = ({
  categoryId,
  selected,
  onSelect,
  contentContainerStyle,
}) => {
  const category = useAppSelector(
    (state) => selectCategoryById(state, categoryId),
    shallowEqual,
  );

  const handlePress = () => {
    onSelect(categoryId);
  };

  if (!category) {
    return null;
  }

  return (
    <Pressable
      style={[
        globalStyles.flexDirectionRow,
        globalStyles.alignItemsCenter,
        contentContainerStyle,
      ]}
      onPress={handlePress}
      pointerEvents="box-only"
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      android_ripple={{
        color: Color(ColorPalette.YELLOW_100).alpha(0.2).rgb().string(),
      }}
    >
      <CheckBox value={selected} />
      <Text style={globalStyles.ml2}>{category.title}</Text>
    </Pressable>
  );
};

export { CategoryListItem };
