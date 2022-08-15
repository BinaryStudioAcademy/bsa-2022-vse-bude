import React, { FC } from 'react';
import { Pressable, View } from 'react-native';
import { ButtonType, ButtonAppearance } from '~/common/enums/enums';
import { Text } from '~/components/components';
import { styles } from './styles';

type Props = {
  label: string;
  type?: ButtonType;
  view?: ButtonAppearance;
  isDisabled?: boolean;
  onPress: () => void;
};

const Button: FC<Props> = ({
  label,
  type = ButtonType.PRIMARY,
  view = ButtonAppearance.FILLED,
  isDisabled,
  onPress,
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
          isOutlined && isDisabled ? styles.disabledOutlained : {},
        ]}
      >
        <Text
          style={[
            styles.title,
            isOutlined ? styles.outlainedTitle : styles.filledTitle,
            isDisabled ? styles.filledTitle : {},
            isOutlined && isDisabled ? styles.disabledOutlainedTitle : {},
          ]}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
};

export { Button };
