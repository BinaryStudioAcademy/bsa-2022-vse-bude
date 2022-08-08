import React, { FC } from 'react';
import { Pressable, View } from 'react-native';
import { ButtonType } from '~/common/enums/enums';
import { Text } from '~/components/components';
import { styles } from './styles';

//mock before update global theme color
enum AppColor {
  YELLOW_100 = '#F1B313',
  YELLOW_200 = '#FFB800',
  GRAY_200 = '#DFDFDF',
  WHITE = '#FFFFFF',
}
////

type Props = {
  label: string;
  type?: ButtonType;
  isDisabled?: boolean;
  isOutlined?: boolean;
  onPress: () => void;
};

const Button: FC<Props> = ({
  label,
  type = ButtonType.MAIN,
  isDisabled,
  isOutlined,
  onPress,
}) => {
  return (
    <Pressable disabled={isDisabled} onPress={onPress}>
      <View
        style={[
          styles.button,
          styles[type],
          isOutlined
            ? {
                backgroundColor: AppColor.WHITE,
                borderColor: AppColor.YELLOW_100,
                borderWidth: 2,
              }
            : { backgroundColor: AppColor.YELLOW_100 },
          isDisabled
            ? {
                backgroundColor: AppColor.GRAY_200,
                borderColor: AppColor.GRAY_200,
              }
            : {},
          isOutlined && isDisabled
            ? {
                backgroundColor: AppColor.WHITE,
                borderColor: AppColor.GRAY_200,
                borderWidth: 2,
              }
            : {},
        ]}
      >
        <Text
          style={[
            styles.title,
            isOutlined
              ? { color: AppColor.YELLOW_100 }
              : { color: AppColor.WHITE },
            isDisabled
              ? { color: AppColor.WHITE }
              : { color: AppColor.YELLOW_100 },
            isOutlined && isDisabled
              ? {
                  color: AppColor.GRAY_200,
                }
              : {},
          ]}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
};

export { Button };
