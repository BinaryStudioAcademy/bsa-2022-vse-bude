import React, { FC } from 'react';
import { Pressable, View , ColorValue } from 'react-native';
import { ButtonType, ButtonAppearance } from '~/common/enums/enums';
import { Text } from '~/components/components';
import { styles } from './styles';

type Props = {
  label: string;
  type?: ButtonType;
  view?: ButtonAppearance;
  isDisabled?: boolean;
  onPress: () => void;
  textColor?: ColorValue;
  background?: ColorValue;
  fontSize?: number;
};

const Button: FC<Props> = ({
  label,
  type = ButtonType.PRIMARY,
  view = ButtonAppearance.FILLED,
  isDisabled,
  onPress,
  textColor,
  background,
  fontSize,
}) => {
  const isOutlined = view === ButtonAppearance.OUTLINED;

  return (
    <Pressable disabled={isDisabled} onPress={onPress}>
      <View
        style={[
          styles.button,
          styles[type],
          styles[view],
          isDisabled ? styles.disabledFill : {},
          isOutlined && isDisabled ? styles.disabledOutlined : {},
          background ? { backgroundColor: background } : {},
        ]}
      >
        <Text
          style={[
            styles.title,
            isOutlined ? styles.outlinedTitle : styles.filledTitle,
            isDisabled ? styles.filledTitle : {},
            isOutlined && isDisabled ? styles.disabledOutlinedTitle : {},
            textColor ? { color: textColor } : {},
            fontSize ? { fontSize } : {},
          ]}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
};

export { Button };
