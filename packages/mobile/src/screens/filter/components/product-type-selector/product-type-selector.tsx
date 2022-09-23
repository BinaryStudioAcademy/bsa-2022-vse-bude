import React, { FC } from 'react';
import { Text, TouchableOpacity } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { useCustomTheme } from '~/hooks/hooks';
import { StyleProp, ViewStyle } from 'react-native';
import { styles } from './styles';

type Props = {
  title: string;
  isSelected: boolean;
  onPress: () => void;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const ProductTypeSelector: FC<Props> = ({
  title,
  isSelected,
  contentContainerStyle,
  onPress,
}) => {
  const { colors } = useCustomTheme();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        globalStyles.py3,
        globalStyles.alignItemsCenter,
        {
          backgroundColor: isSelected
            ? colors.yellow
            : colors.backgroundElements,
        },
        contentContainerStyle,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          globalStyles.fs14,
          globalStyles.fontWeightSemiBold,
          { color: isSelected ? colors.whiteColor : colors.textSecondary },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export { ProductTypeSelector };
