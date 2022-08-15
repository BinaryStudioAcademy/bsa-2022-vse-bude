import React, { FC } from 'react';
import { View } from '~/components/components';
import { styles } from './style';

const Flag:FC = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.flagTop} />
      <View style={styles.flagBottom} />
    </View>
  );
};

export { Flag };
