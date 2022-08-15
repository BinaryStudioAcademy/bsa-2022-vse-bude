import React, { FC } from 'react';
import { View, Image } from '~/components/components';
import { ImageURISource } from 'react-native';
import { styles } from './styles';

type Props = {
  imageSource: ImageURISource;
};

const Organization: FC<Props> = ({ imageSource }) => {
  return (
    <View style={styles.imgContainer}>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
};

export { Organization };
