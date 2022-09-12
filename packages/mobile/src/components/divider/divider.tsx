import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Text, View } from '~/components/components';
import { useCustomTheme } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  text?: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const Divider: FC<Props> = ({ text, contentContainerStyle }) => {
  const { colors } = useCustomTheme();

  return (
    <View
      style={[
        contentContainerStyle,
        globalStyles.flexDirectionRow,
        globalStyles.alignItemsCenter,
      ]}
    >
      <View
        style={[
          text ? styles.halfLine : styles.line,
          { backgroundColor: colors.line },
        ]}
      />
      {!!text && (
        <>
          <Text
            style={[
              styles.text,
              globalStyles.px3,
              globalStyles.fs18,
              globalStyles.fontWeightSemiBold,
              { color: colors.line },
            ]}
          >
            {text}
          </Text>
          <View style={[styles.halfLine, { backgroundColor: colors.line }]} />
        </>
      )}
    </View>
  );
};

export { Divider };
