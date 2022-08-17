import React, { FC } from 'react';
import { TouchableOpacity, View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  onClick: () => void;
};

const BurgerMenu: FC<Props> = ({ onClick }) => {
  return (
    <TouchableOpacity
      style={[styles.wrapper, globalStyles.justifyContentSpaceBetween]}
      onPress={() => onClick()}
    >
      <View style={styles.bar} />
      <View style={[styles.bar, styles.barMiddle]} />
      <View style={styles.bar} />
    </TouchableOpacity>
  );
};
export { BurgerMenu };
