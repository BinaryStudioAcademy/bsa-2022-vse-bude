import React, { FC } from 'react';
import { ViewStyle } from 'react-native';
import { useCustomTheme } from '~/hooks/hooks';
import { Text, View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  label: string;
  contentContainerStyle?: ViewStyle;
};

const CustomText: FC<Props> = ({ label, contentContainerStyle }) => {
  const { colors } = useCustomTheme();

  return (
    <View style={contentContainerStyle}>
      <Text
        style={[
          styles.text,
          globalStyles.fs14,
          { color: colors.textSecondary },
        ]}
      >
        {label}
      </Text>
    </View>
  );
};

export { CustomText };
