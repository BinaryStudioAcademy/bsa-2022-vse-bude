import React, { FC } from 'react';

import { ButtonAppearance } from '~/common/enums/enums';
import { Text, View, Spinner, Pressable } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';
import { ButtonProps } from './common/types/types';
import { useButtonStyle } from './common/hooks/use-button-style';

const Button: FC<ButtonProps> = ({
  label,
  appearance = ButtonAppearance.FILLED,
  disabled,
  onPress,
  textColor,
  buttonColor,
  compact,
  iconLeft,
  iconRight,
  isLoading,
  contentContainerStyle,
}) => {
  const { containerStyle, buttonStyle, textStyle, rippleConfig } =
    useButtonStyle({
      appearance,
      disabled,
      textColor,
      buttonColor,
      compact,
    });

  return (
    <View
      pointerEvents="box-none"
      style={[styles.wrapper, containerStyle, contentContainerStyle]}
    >
      <Pressable
        disabled={disabled}
        onPress={onPress}
        style={[
          globalStyles.justifyContentCenter,
          globalStyles.alignItemsCenter,
          globalStyles.flexDirectionRow,
          globalStyles.px4,
          styles.button,
          buttonStyle,
        ]}
        android_ripple={rippleConfig}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {iconLeft && <View style={globalStyles.mr1}>{iconLeft}</View>}
            <Text
              style={[globalStyles.fontWeightSemiBold, styles.label, textStyle]}
            >
              {label}
            </Text>
            {iconRight && <View style={globalStyles.ml1}>{iconRight}</View>}
          </>
        )}
      </Pressable>
    </View>
  );
};

export { Button };
