import React, { FC } from 'react';
import { Pressable, Text, View } from '~/components/components';
import { useCustomTheme } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

const GoogleButton: FC = () => {
  const { colors } = useCustomTheme();

  return (
    <Pressable>
      <View
        style={[styles.buttonWrapper, { borderColor: colors.borderButton }]}
      >
        <Text
          style={[
            styles.buttonText,
            { color: colors.titlePrimary },
            globalStyles.fs16,
            globalStyles.fontWeightBold,
          ]}
        >
          Sign in with Google
        </Text>
      </View>
    </Pressable>
  );
};

export { GoogleButton };
