import React, { FC } from 'react';
import { Pressable, View } from 'react-native';
import { ButtonType, ButtonView } from '~/common/enums/enums';
import { Text } from '~/components/components';
import { styles } from './styles';

type ReactText = string | number;
type Props = {
  label: ReactText;
  type?: ButtonType;
  view?: ButtonView;
  isDisabled?: boolean;
  onPress: () => void;
};

const Button: FC<Props> = ({
  label,
  type = ButtonType.PRIMARY,
  view = ButtonView.FILLED,
  isDisabled,
  onPress,
}) => {
  const isOutlined = view === ButtonView.OUTLINED;

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
