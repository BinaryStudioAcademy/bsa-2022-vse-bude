import React, { FC } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import IconUI from 'react-native-vector-icons/Feather';
import { IconName } from '~/common/enums/enums';
import { Text } from '~/components/components';
import { styles } from './styles';

type Props = {
  name: IconName;
  size: number;
  color?: string;
  label?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const Icon: FC<Props> = ({ name, size, style, color, label, onPress }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    disabled={!onPress}
    style={[styles.container, style]}
    onPress={onPress}
  >
    <IconUI name={name} size={size ? size : 20} color={color} />
    {label && <Text style={[styles.label]}>{label}</Text>}
  </TouchableOpacity>
);

export { Icon };
