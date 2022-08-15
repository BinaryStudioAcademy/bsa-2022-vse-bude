import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type Props = {
  onClick: () => void;
};

const BurgerMenu: FC<Props> = ({ onClick }) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onClick}>
      <View style={styles.bar} />
      <View style={[styles.bar, styles.barMiddle]} />
      <View style={styles.bar} />
    </TouchableOpacity>
  );
};
export { BurgerMenu };
