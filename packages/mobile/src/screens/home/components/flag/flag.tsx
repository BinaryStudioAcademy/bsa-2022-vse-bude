import React from 'react';
import { View } from 'react-native';
import { styles } from './style';

const Flag = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.flagTop} />
      <View style={styles.flagBottom} />
    </View>
  );
};

export { Flag };
